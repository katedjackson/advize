import axios from 'axios';
import { RECEIVE_NOTES, RECEIVE_NOTE } from './constants'

/*~~~~~~~~~~~~~~~~~ACTION-CREATORS~~~~~~~~~~~~~~~~~~~~~~*/
export const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
})

/*~~~~~~~~~~~~~~~~~THUNKS~~~~~~~~~~~~~~~~~~~~~~*/
export const getNoteById = noteId => {
  axios.get(`/api/notes/${noteId}`)
    .then(response => {
      dispatch(receiveNote(response.data))
    })
  }
}
