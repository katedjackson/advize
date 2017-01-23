'use strict'

import React from 'react'
import { Col, Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="class-list">
    <h1>My Classes</h1>
      {
        props.classes && props.classes.map(oneClass => (
          <Col xs={12} sm={12} md={6} lg={6} key={oneClass.id}>
            <Link to={`/classes/${oneClass.id}`}>
              <Thumbnail className="img-responsive" src={oneClass.imageURL} alt={`${oneClass.name} photo`}>
                <h3>{oneClass.name}</h3>
              </Thumbnail>
            </Link>
          </Col>
        ))
      }
    </div>
  )
}
