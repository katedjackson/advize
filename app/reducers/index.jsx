import { combineReducers } from 'redux'
import noteReducer from './note-reducer'
import authReducer from './auth-reducer'
import userReducer from './user-reducer'
import classReducer from './class-reducer'
import currentStudentReducer from './current-student-reducer'
import currentClassReducer from './current-class-reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  notes: noteReducer,
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  classes: classReducer,
  currentClass: currentClassReducer,
  currentStudent: currentStudentReducer
})

export default rootReducer
