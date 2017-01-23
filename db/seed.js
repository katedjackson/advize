const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {
    name: 'Katie Jackson',
    email: 'katelynj29@gmail.com',
    password: 'abcd1234'
  }
], user => db.model('users').create(user))

const seedClasses = () => db.Promise.map([
  { name: '303', user_id: 1, imageURL: "https://photos.google.com/photo/AF1QipOohI1Qtc5Zlx3UOnSU-Z1PJb9Ub82HXe4Eq0qJ" },
  { name: '202', user_id: 1, imageURL: "https://photos.google.com/photo/AF1QipMBNwxt3vHbPywPrVJ8yenSZPmrmDDao4SmCmB8" }
], oneClass => db.model('classes').create(oneClass))

const seedStudents = () => db.Promise.map([
  { name: 'Chloe', readingLevel: 'O', class_id: 1 },
  { name: 'Tyler', readingLevel: 'J', class_id: 1 },
  { name: 'Ashley', readingLevel: 'O', class_id: 1 },
  { name: 'Nathaniel', readingLevel: 'K', class_id: 1 },
  { name: 'Matenen', readingLevel: 'L', class_id: 1 },
  { name: 'Kendry', readingLevel: 'J', class_id: 2 },
  { name: 'Richy', readingLevel: 'M', class_id: 2 },
  { name: 'Amber', readingLevel: 'J', class_id: 2 },
  { name: 'Exavior', readingLevel: 'K', class_id: 2 }
], student => db.model('students').create(student))

const seedNotes = () => db.Promise.map([
  {
    student_id: 1,
    research: 'Main Ideas are just named topics',
    teachingPoint: 'Readers identify the main idea by asking, "What was this MOSTLY about?"',
    nextSteps: 'Follow up with main-idea post-its'
  },
  {
    student_id: 2,
   research: 'Main Ideas are just named topics',
    teachingPoint: 'Readers identify the main idea by asking, "What was this MOSTLY about?"',
    nextSteps: 'Follow up with main-idea post-its'
  }
], note => db.model('notes').create(note))

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedClasses)
  .then(classes => console.log(`Seeded ${classes.length} classes OK`))
  .then(seedStudents)
  .then(students => console.log(`Seeded ${students.length} students OK`))
  .then(seedNotes)
  .then(notes => console.log(`Seeded ${notes.length} notes OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
