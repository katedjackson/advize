'use strict'

import axios from 'axios'
import { RECEIVE_CLASS } from './constants'

/*----------ACTION CREATORS-------------*/
export const receiveCurrentClass = (currentClass) => ({
  type: RECEIVE_CLASS,
  currentClass
})

/*--------------THUNKS-----------------*/
export const getClassById = classId => {
  return dispatch => {
    axios.get(`/api/classes/1/${classId}`)
      .then(response => {
        dispatch(receiveCurrentClass(response.data))
      })
  }
}
