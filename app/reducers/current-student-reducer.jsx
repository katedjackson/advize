import { RECEIVE_STUDENT } from '../action-creators/constants'

export default function (state = {}, action) {
  switch (action.type) {

    case RECEIVE_STUDENT:
      return action.currentStudent;

    default:
      return state;
  }
}
