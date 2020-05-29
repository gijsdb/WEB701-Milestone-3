const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const Hop = require('./Hop')

function hashPassword(user, options) {
  const SALT_FACTOR = 8

  if(!user.changed('password')) {
    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
      console.log("Hashed")
    })
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    accountType: {
      type:   DataTypes.ENUM,
      unique: false,
      values: ['Farmer','Buyer']
    },
  }, { 
    hooks: {
      beforeSave: hashPassword,
      beforeUpdate: hashPassword,
    }
  })

  /*
  User.associate = function(models) {
    models.User.hasMany(models.Hop);
  };
  */

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
