import { RECEIVE_CLASSES } from '../action-creators/constants'

export default function (state = [], action) {
  switch (action.type) {

    case RECEIVE_CLASSES: return action.classes

    default: return state;

  }
}
