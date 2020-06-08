  /*      File Name   : Logout.js
          Date        : 31st May 2020
          Description : This is the Logout.js file which allows users to logout of the app
  */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unsetAuthedUser } from '../actions/authedUser'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(unsetAuthedUser())
  }
  render () {
    return <Redirect to='/' />
  }
}

export default connect()(Logout)
