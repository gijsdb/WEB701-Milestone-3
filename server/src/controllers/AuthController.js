const {User} = require('../models')
const {Hop} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

const SALT_FACTOR = 8

module.exports = {
    async register (req, res) {
      try {
        const user = await User.create(req.body)
        res.send(user.toJSON())
        console.log("User created success")
      } catch(err) {
        if(err.name === "SequelizeUniqueConstraintError") {
          const fields = err.fields;
          res.status(400).send({
            error: fields + " must be unique"
          })
        } else {
          console.log(err)
          res.status(400).send({
            error: err.name
          })
        }
      }
    },
    async login (req, res) {
      try {
        const {email, password} = req.body
        const user = await User.findOne({
          where: {
            email: email
          }
        })
        if(!user) {
          res.status(403).send({
            error: 'No user found with details'
          })
          return;
        }

        const isPasswordValid = await user.comparePassword(password)
        if(!isPasswordValid) {
          console.log("wrong pass")
          return res.status(403).send({
            error: 'Login info not correct'
          })
        }

        const userJson = user.toJSON()
        console.log("logged in")
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })

      } catch(err) {
        console.log(err.name)
        res.status(500).send({
            error: err.name
        })
      }
    },
    async updateaccount (req, res) {
      try {
        const newEmail = req.body.newEmail;
        const oldEmail = req.body.oldEmail;
        const password = req.body.password;
        const newPass = await bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(password, salt, null))
        .then(hash => {
          this.newPass = hash
          console.log(this.newPass)
        });

        const isEmailTaken = await User.findOne({
          where: {
            email: newEmail
          }
        });

        if(isEmailTaken) {
          console.log("email in use")
          res.status(403).send({
            error: 'That email is in use'
          })
        } else {
          console.log("updating")
          await User.update(
            { 
              email: newEmail,
              password: newPass,
             },
            { where: { 
              email: oldEmail 
            },
          }); 
          await Hop.update({ 
            userId: newEmail,
          },
          { where: { 
            userId: oldEmail,
          },
        }).then(function (result) {
            res.status(200).send({
              error: 'Success'
            });
          });
        }
        } catch (err) {
          res.send(err);
        }
    },
}