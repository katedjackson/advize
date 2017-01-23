'use strict'

import axios from 'axios'
import { RECEIVE_CLASSES } from './constants'

/*----------ACTION CREATORS-------------*/
export const receiveClasses = (classes) => ({
  type: RECEIVE_CLASSES,
  classes
})

/*--------------THUNKS-----------------*/
export const getAllClasses = userId => {
  return dispatch => {
    axios.get(`/api/classes/${userId}`)
      .then(response => {
        dispatch(receiveClasses(response.data))
      })
  }
}
