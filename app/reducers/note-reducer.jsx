import { RECEIVE_NOTES, RECEIVE_NOTE } from '../action-creators/constants'

const initialNotesState = {
  selected: {},
  list: []
};

export default function (state = initialNotesState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_NOTES:
      newState.list = action.notes;
      break;

    case RECEIVE_NOTE:
      newState.selected = action.note;
      break;

    default:
      return state;

  }

  return newState;

}
