import React, { Component, Fragment } from 'react'

import '../example/src/App.css'
export class DatePicker extends Component {
  render() {
    return (
      <Fragment>
        <div className='output'>
          <h1>Your selected date is: </h1>
          <h1>{this.props.defaultValue}</h1>
        </div>
      </Fragment>
    )
  }
}
