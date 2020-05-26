const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
    async register (req, res) {
      try {
        const user = await User.create(req.body)
        res.send(user.toJSON())
        console.log("User created success")
      } catch(err) {
        console.log(err)
        res.status(400).send({
            error: 'This email is in use'
        })
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
          console.log("no user found")
          res.status(403).send({
            error: 'No user found with details'
          })
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
        console.log(err)
        res.status(500).send({
            error: 'An error occured'
        })
      }
    }
}