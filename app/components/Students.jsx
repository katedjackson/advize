'use-strict'

import React from 'React'

const Students = (props) => {
  return (
    <div>
      <h1>Students</h1>
      {
        props.currentClass.students
      }
    </div>
  )
}

export default Students
