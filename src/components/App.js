/*     File Name   : app.js
          Date        : 31st May 2020
          Description : This is the central component app.js which uses functions like mapStateToProps and App.propTypes
    
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import { handletheInitialData } from '../actions/shared'
import Routes from './Routes'
import NavBar from './NavBar'

class App extends Component {
  componentDidMount() {
    this.props.handletheInitialData()
    
  }
  render() {
    const { isLoggedIn } = this.props

    return (
      <Router>
        <div className="main-container">
          <NavBar />
          <Routes isLoggedIn={isLoggedIn} />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  handletheInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handletheInitialData: () => {
      dispatch(handletheInitialData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
