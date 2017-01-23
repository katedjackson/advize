'use strict';

const Note = require('./note')
const RunningRecord = require('./runningRecord')
const Student = require('./student')
const User = require('./user')
const Class = require('./class')

RunningRecord.belongsTo(Note)
Note.belongsTo(Student)
Student.hasMany(Note)
Student.belongsTo(Class)
Class.hasMany(Student)
Class.belongsTo(User)
User.hasMany(Class)

module.exports = { Note, RunningRecord, Student, Class, User }
