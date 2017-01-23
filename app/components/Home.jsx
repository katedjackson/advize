'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Thumbnail } from 'react-bootstrap'
import { connect } from 'react-redux'
import Classes from './Classes'
import Login from './Login'
import SplashScreen from './SplashScreen'

const LoggedIn = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user }) => (
    <div className="home-options">
      <nav>
        {
          user ?
          (
            <Link to={`/${user.id}/classes`}>
              <Col xs={12} sm={12} md={6} lg={3}>
                <Thumbnail className="img-responsive" src="/images/class-icon.png">
                  My Classes
                </Thumbnail>
              </Col>
            </Link>
          )
          : <SplashScreen />}
      </nav>
    </div>
  )
)

const Home = (props) => {
  return(
    <div>
      <LoggedIn classes={props.classes} />
    </div>
  )
}

const mapStateToProps = (state) => ({ classes: state.classes })

export default connect(mapStateToProps)(Home)
