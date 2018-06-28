import React, { Component } from 'react'
import { AppContext } from '../AppContext/context'
import AppProvider from '../AppProvider'
import Nested from '../Nested'


class Home extends Component {
  render() {
    return (
        <AppContext.Consumer>
          {({ state, actions }) => {
            return (
              <div className='Home' style={{ border: '1px solid black', margin: '1em', padding: '1em' }}>
                <h4>HOME</h4>
                  <strong>App state.number = { state.number }</strong>
                  <button
                    className='btn-success'
                    onClick={() => actions.update({ number: state.number + 1 })}
                    >
                    Add +
                  </button>
                  <button
                    className='btn-danger'
                    onClick={() => actions.update({ number: 0 })}
                    >
                    clear
                  </button>
                <Nested/>

              </div>
            )
          }}
        </AppContext.Consumer>
    )
  }
}

export default Home
