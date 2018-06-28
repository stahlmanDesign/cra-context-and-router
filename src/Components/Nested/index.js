import React, { Component } from 'react'
import { AppContext } from '../AppContext/context'

class Nested extends Component {
  state = {
    number: 0
  }
  handleClickInNested =({ state, actions }) =>(e)=>{
    // actions.update({ number: state.number + 1 })
    this.setState({ number: this.state.number + 1 })
  }
  render(){
    return <AppContext.Consumer>
      {({ state, actions }) => {
        console.log('state', state)
        return (
          <div style={{ border: '1px solid black', margin: '1em', padding: '1em' }}>
            <h4>Nested - state cleared when component unmounts</h4>
            <strong>this.state.number = { this.state.number }</strong>
            <button
              className="btn-success"
              onClick={ this.handleClickInNested({ state, actions }) }
              >
              NestedAdd +
            </button>
            <pre>Nested local state { JSON.stringify(this.state) }</pre>
            <pre>Nested has access to App state { JSON.stringify(state) } </pre>
          </div>
        )
      }}
    </AppContext.Consumer>
  }
}

export default Nested
