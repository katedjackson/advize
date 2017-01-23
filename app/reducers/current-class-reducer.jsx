import { RECEIVE_CLASS } from '../action-creators/constants'

export default function (state = {}, action) {
  switch (action.type) {

    case RECEIVE_CLASS:
      return action.currentClass;

    default:
      return state;
  }
}
