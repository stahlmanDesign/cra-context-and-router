import React, { Component } from 'react'
import { AppContext } from '../AppContext/context'

import { Route } from 'react-router-dom'

class About extends Component {
  render() {
    return (
        <AppContext.Consumer>
          {({ state, actions }) => {
            return (
              <div className='About'>

                <h2>About</h2>

              </div>
            )
          }}
        </AppContext.Consumer>
    )
  }
}

export default About
