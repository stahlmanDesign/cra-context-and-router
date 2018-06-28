import React, { Component } from 'react'

// Create new context
export const AppContext = React.createContext()

export class AppProvider extends React.Component {
  state = {
    number: 0
  }

  update = newState => {
    this.setState({...this.state, ...newState})
  }

  get getContext(){
    return {
      state: this.state,
      actions: {
        update: this.update,
      }
    }
  }

  render() {
    return (
      <AppContext.Provider value={ this.getContext }>
      { this.props.children }
      </AppContext.Provider>
    )
  }
}
