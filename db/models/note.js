'use-strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Note = db.define('notes', {
  research: {
    type: Sequelize.TEXT
  },
  teachingPoint: {
    type: Sequelize.TEXT
  },
  nextSteps: {
    type: Sequelize.TEXT
  }
})

module.exports = Note
