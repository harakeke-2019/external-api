import React from 'react'
import {getPeople} from '../api'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    const personId = 1
    getPeople(personId)
      .then(res => {
        this.setState({name: res.name})
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
        <h3>Api Name: {this.state.name}</h3>
      </div>
    )
  }
}

export default App
