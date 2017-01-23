'use-strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Class = db.define('classes', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  imageURL: {
    type: Sequelize.STRING
  }
})

module.exports = Class
