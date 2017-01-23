import React from 'react'
import { loginAndGoToHome } from 'APP/app/reducers/auth-reducer'
import { connect } from 'react-redux'
import { Navbar, FormGroup, FormControl, pullRight } from 'react-bootstrap'

export const Login = ({ loginAndGoToHome }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault()
      loginAndGoToHome(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
)

export default connect( state => ({}), { loginAndGoToHome })(Login)
