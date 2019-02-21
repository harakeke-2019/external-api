import React from 'react'
import {getPuppy} from '../api'

export default class Puppy extends React.Component {
  constructor () {
    super()
    this.state = {
      puppy: ''
    }
  }

  componentDidMount () {
    getPuppy()
      .then(res => {
        this.setState({puppy: res.message})
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  // If you want to test that the UI (Divs) are in the right place you would use Enzyme. Because enzyme cares about the markup/UI.

  render () {
    return (
      <div>
        <h1>Hello earth people</h1>
        <img src={this.state.puppy}/>
      </div>
    )
  }
}
