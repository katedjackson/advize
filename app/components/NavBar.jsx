'use strict'

import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon, ButtonToolbar, ButtonGroup, Button , pullRight } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logout as logOutUser, loginAndGoToHome } from '../action-creators/auth'
import { connect } from 'react-redux'
import Login from './Login'
import WhoAmI from './WhoAmI'

const LoginFunctionality = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
    </div>
)

const LoginSignup = (props) => {
  return (
    <NavDropdown
      noCaret
      eventKey={3}
      title="Account"
      id={props.collapse ? 'login-dropdown-collapse' : 'login-dropdown'}
      className="navbar-login">
      <LinkContainer to={{pathname: '/account/login'}}>
        <MenuItem eventKey={3.1}>Login / Signup</MenuItem>
      </LinkContainer>
    </NavDropdown>
  )
}

LoginSignup.propTypes = {
  collapse: PropTypes.bool.isRequired
}

const Logout = (props) => {
  const name = (!props.auth || props.auth === 'String') ? null : (props.auth.name || props.auth.email)

  return (
    <NavDropdown
      href="#"
      noCaret eventKey={3}
      title={`Hi, ${name}! `}
      id={props.collapse ? 'logout-dropdown-collapse' : 'logout-dropdown'}
      className="navbar-login">
      <MenuItem eventKey={3.1}>Account</MenuItem>
      <LinkContainer to={{pathname: '/'}}>
        <MenuItem eventKey={3.1} onClick={props.logout}>
          Logout
        </MenuItem>
      </LinkContainer>
    </NavDropdown>
  )
}

Logout.propTypes = {
  collapse: PropTypes.bool.isRequired
}


const NavBar = (props) => {
  console.log(props)
  return (
    <div className="nav-bar">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Advize</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/newnote"><Glyphicon glyph="plus" /></NavItem>
          <NavItem eventKey={2} href={`/classes`}><Glyphicon glyph="education" /></NavItem>
          <NavItem eventKey={3} href="/students"><Glyphicon glyph="user" /></NavItem>
          <NavItem eventKey={4} href="/user"><Glyphicon glyph="apple" /></NavItem>
        </Nav>
        <Nav pullRight>
          <LoginFunctionality />
        </Nav>
      </Navbar>
    </div>
  )
}

const mapState = ({auth}) => ({auth});

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logOutUser())
    browserHistory.push('/')
  }
})

export default connect(mapState, mapDispatch)(NavBar)
