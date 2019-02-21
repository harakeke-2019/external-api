import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import puppy from './puppy'

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <Route exact path='/puppy' component={puppy}/>
      </div>
    </Router>
  )
}

export default App
