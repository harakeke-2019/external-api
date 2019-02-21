import React from 'react'
import {getPeople} from '../api'

export default class People extends React.Component {
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
        <h1>{this.state.people}</h1>
      </div>
    )
  }
}
