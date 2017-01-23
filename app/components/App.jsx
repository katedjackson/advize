'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from './NavBar'

const App =  (props) => {
  return (
    <div id="main" className="container-fluid">
      <div>
        <NavBar />
      </div>
      <div>
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  )
}

const mapState = (state, ownProps) => {
  return {
    children: ownProps.children,
    auth: state.auth,
    user: state.users,
    form: state.form,
    loading: state.loading,
    classes: state.classes,
    students: state.students,
    currentStudent: state.currentStudent
  }
}
const mapDispatch = (dispatch) => ({ dispatch })

export default connect(mapState, mapDispatch)(App)
