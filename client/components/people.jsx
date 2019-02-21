import React from 'react'
import {getPeople} from '../api'

export default class people extends React.Component {
  constructor () {
    super()
    this.state = {
      people: ''
    }
  }

  componentDidMount () {
    getPeople()
      .then(res => {
        this.setState({people: res.body})
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div>
        <ul>
          <li>{this.state.people}</li>
        </ul>
      </div>
    )
  }
}
