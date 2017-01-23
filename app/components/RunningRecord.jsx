'use strict'

import React from 'react'
import { Field, reduxForm} from 'redux-form'
import { Grid, Row, Col } from 'react-bootstrap'

const renderRRField = function ({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
}

let RunningRecord = (props) => {
  return (
    <Grid className="running-record">
      <form onSubmit={props.onRRSubmit}>
        <Row className="std-info">
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="student-name"> Name </label>
            <Field name="student-name" component="input" type="text"/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="reading-level"> Reading Level </label>
            <Field name="reading-level" component="input" type="text"/>
          </Col>
        </Row>
        <Row className="book-info">
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="text-title"> Text </label>
            <Field name="text-title" component="input" type="text"/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="book-level"> Level </label>
            <Field name="book-level" component="input" type="text"/>
          </Col>
        </Row>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <label htmlFor="total-word-count"> Word Count </label>
            <Field name="total-word-count" component="input" type="text"/>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <label htmlFor="wpm"> WPM </label>
            <Field name="wpm" component="input" type="text"/>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <label htmlFor="fluency"> Fluency </label>
            <Field name="fluency" component="input" type="text"/>
          </Col>
        </Row>
        {/*<Toolbar />*/}
        <Row className="rr-header">
          <Col className="input-table" xs={6} sm={6} md={6} lg={6}>
            <h4>Running Record</h4>
          </Col>
          <Col className="input-table" xs={3} sm={3} md={3} lg={3}>
            <h4>Error Count</h4>
          </Col>
          <Col className="input-table" xs={3} sm={3} md={3} lg={3}>
            <h4>Analysis</h4>
          </Col>
        </Row>
        <Row>
          <Col className="input-table" xs={6} sm={6} md={6} lg={6}>
            <Field name="rr-input" component={renderRRField} type="text"/>
          </Col>
          <Col className="input-table" xs={3} sm={3} md={3} lg={3}>
            <Field name="error-count" component="input" type="text"/>
          </Col>
          <Col className="input-table" xs={3} sm={3} md={3} lg={3}>
            <Field name="error-analysis" component="input" type="text"/>
          </Col>
        </Row>
        <button type="button" className="previous" onClick={props.previousPage}>Back</button>
        <button type="submit">Save</button>
      </form>
    </Grid>
  )
}

// Decorate the form component
RunningRecord = reduxForm({
  form: 'note',
  destroyOnUnmount: false
})(RunningRecord)

export default RunningRecord
