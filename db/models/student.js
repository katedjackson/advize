'use-strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Student = db.define('students', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  readingLevel: {
    type: Sequelize.STRING
  },
  imageURL: {
    type: Sequelize.STRING
  }
})

module.exports = Student
