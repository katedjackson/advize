'use strict'

import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form'
import { Grid, Row, Col } from 'react-bootstrap'
import RunningRecord from './RunningRecord'
import NoteForm from './NoteForm'

class FormWizard extends Component {
  constructor(props) {
    super(props)
    this.doNoteSubmit = this.doNoteSubmit.bind(this)
    this.doRRSubmit = this.doRRSubmit.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  doNoteSubmit(values) {
    console.log('submitted!')
    //redirect to home page
  }

  doRRSubmit(values) {
    console.log('submitted!')
  }

  nextPage() {
    this.setState({ page: this.state.page + 1})
  }

  previousPage() {
    this.setState({ page: this.state.page - 1})
  }

  render() {
    const { page } = this.state

    return (
      <div>
      {page === 1 && <NoteForm onSubmit={this.doNoteSubmit} nextPage={this.nextPage} />}
      {page === 2 && <RunningRecord onSubmit={this.doRRSubmit} previousPage={this.previousPage} />}
      </div>
    )
  }
}

export default FormWizard




