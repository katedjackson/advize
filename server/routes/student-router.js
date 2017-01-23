'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Note = db.model('notes')
const RunningRecord = db.model('running-records')

const { mustBeLoggedIn, forbidden } = require('../auth.filters')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Student.findAll({
      include: [ Note ]
    })
      .then(student => res.json(student))
      .catch(next)
  })
  .get('/:id', (req, res, next) => {
    Student.findOne({ where: { id: req.params.id }, include: [ Note ] })
      .then(student => res.json(student))
      .catch(next)
  })

