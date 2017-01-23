'use-strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const RunningRecord = db.define('running-records', {
  textTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  textLevel:{
    type: Sequelize.STRING,
    allowNull: false
  },
  wordCount: {
    type: Sequelize.INTEGER
  },
  wpm: {
    type: Sequelize.INTEGER
  },
  fluency: {
    type: Sequelize.ENUM('1','2','3','4')
  },
  inputRecord: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = RunningRecord
