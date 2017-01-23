'use strict'

import React from 'react'
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import Home from './components/Home'
import StudentHistory from './components/StudentHistory'
import FormWizard from './components/FormWizard'
import Students from './components/Students'
import LoginSignup from './components/LoginSignup'
import Classes from './components/Classes'

import { getAllClasses } from './action-creators/class'
import { getClassById } from './action-creators/currentClass'

const onClassesEnter = (nextRouterState) => {
  const id = nextRouterState.params.userId
  store.dispatch(getAllClasses(id))
}

const onStudentsEnter = (nextRouterState) => {
  const id = nextRouterState.params.classId
  store.dispatch(getClassById(id))
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path="/account/login" component={LoginSignup} />
          <Route path="/:userId/classes" component={Classes} onEnter={onClassesEnter} />
          <Route path="/classes/:classId" component={Students} onEnter={onStudentsEnter}/>
          <Route path="/newnote" component={FormWizard} />
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </Provider>
  )
}
