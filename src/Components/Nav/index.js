import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext/context'

class Nav extends Component {
  render(){
    return <AppContext.Consumer>
      {({ state, actions }) => {

        return (
          <div className='Nav'>
            <ul>
              <li><Link to={ '/' }>HOME</Link></li>
              <li><Link to={ '/about' }>ABOUT</Link></li>
            </ul>
          </div>
        )
      }}
    </AppContext.Consumer>
  }
}

export default Nav
