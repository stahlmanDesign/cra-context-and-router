import React, { Component } from 'react'
import { AppContext } from '../AppContext/context'
import { Route } from 'react-router-dom'
import Nav from '../Nav'
import Home from '../Home'
import About from '../About'
import Nested from '../Nested'

class App extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ state, actions }) => {
          return (
            <div className='App'>
              <Nav/>
              <h2>
                React 16.3.x Context API with React Router 4.x
              </h2>

              <Route exact={ true } path='/' component={ Home }/>
              <Route path='/about' component={ About }/>

            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default App
