import axios from 'axios'
import { RECEIVE_STUDENT } from './constants'

/*----------ACTION CREATORS-------------*/
export const receiveCurrentStudent = (currentStudent) => ({
  type: RECEIVE_CURRENT_STUDENT,
  currentStudent
})

/*--------------THUNKS-----------------*/
export const getStudentById = studentId => {
  axios.get(`/api/students/${studentId}`)
    .then(response => {
      dispatch(receiveCurrentStudent(response.data))
    })
}
