'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm} from 'redux-form'
import { Grid, Row, Col } from 'react-bootstrap'
import RunningRecord from './RunningRecord'

const renderField = function ({ input, label, type, meta: { touched, error } }) {
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

let NoteForm = (props) => {
  return (
    <Grid className="note-form">
      <form onSubmit={props.doNoteSubmit}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="student-name"> Name </label>
            <Field name="student-name" component="input" type="text"/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="reading-level"> Reading Level </label>
            <Field name="reading-level" component="input" type="text"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="research"> Research </label>
            <Field name="research-input" component={renderField} type="text"/>
            <button type="button" className="next" onClick={props.nextPage}>+ Running Record</button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="tp"> Teaching Point </label>
            <Field name="tp-input" component={renderField} type="text"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="next-steps"> Next Steps </label>
            <Field name="ns-input" component={renderField} type="text"/>
          </Col>
        </Row>
        <button type="submit">Save</button>
      </form>
    </Grid>
  )
}

// Decorate the form component
NoteForm = reduxForm({
  form: 'note',
  destroyOnUnmount: false
})(NoteForm)

export default NoteForm




