'use strict'

const db = require('APP/db')
const Class = db.model('classes')
const Student = db.model('students')
const { mustBeLoggedIn, forbidden } = require('../auth.filters')

module.exports = require('express').Router()
  .get('/:userId', (req, res, next) => {
    Class.findAll({ where: { user_id: req.params.userId }, include: [ Student ] })
      .then(foundClasses => res.json(foundClasses))
      .catch(next)
  })
  .get('/1/:classId', (req, res, next) => {
    Class.findOne({ where: { user_id: req.params.classId }, include: [ Student ] })
      .then(foundClass => res.json(foundClass))
      .catch(next)
  })
