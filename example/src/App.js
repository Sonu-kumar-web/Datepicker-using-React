import React, { Component, Fragment } from 'react'

import { DatePicker } from 'datepicker'
import './App.css'

class App extends Component {
  constructor(props) {
    super()
    let d = new Date()
    let month = '-' + (d.getMonth() + 1)
    let day = '-' + d.getDate()
    let year = d.getFullYear()
    let fullDate = year + month + day
    let minDate = year - 10 + month + day
    let maxDate = year + 10 + month + day

    this.state = {
      format: 'YYYY/MM/DD',
      defaultValue: fullDate,
      minDate: minDate,
      maxDate: maxDate
    }
  }

  render() {
    const { format, defaultValue, minDate, maxDate } = this.state

    return (
      <Fragment>
        <div className='container'>
          <form className='dates'>
            <div className='final'>
              <label>
                <strong>Select the Date format:</strong>
              </label>
              <select name='status' value='' required>
                <option value='default value'>* {format}</option>
                <option value='Minimum date'>Minimum date</option>
                <option value='Maximum date'>Maximum date</option>
              </select>
            </div>
            <div className='final'>
              <label>
                <strong>Select the Minimum date:</strong>
              </label>
              <input
                type='date'
                name='begin'
                placeholder='dd-mm-yyyy'
                value={minDate}
                onChange={(e) => this.setState({ minDate: e.target.value })}
              />
            </div>
            <div className='final'>
              <label>
                <strong>Select the Maximum date:</strong>
              </label>
              <input
                type='date'
                name='begin'
                placeholder='dd-mm-yyyy'
                value={maxDate}
                onChange={(e) => this.setState({ maxDate: e.target.value })}
              />
            </div>
            <div className='final'>
              <label>
                <strong>
                  You can select date between "{minDate}" and "{maxDate}" only
                </strong>
              </label>
              <input
                type='date'
                name='begin'
                placeholder='dd-mm-yyyy'
                value={defaultValue}
                min={minDate}
                max={maxDate}
                onChange={(e) =>
                  this.setState({ defaultValue: e.target.value })
                }
              />
            </div>
          </form>
        </div>
        <DatePicker defaultValue={defaultValue} />
      </Fragment>
    )
  }
}

export default App
