   /*     File Name   : app.js
          Date        : 31st May 2020
          Description : This is the central component app.js which uses functions like mapStateToProps and App.propTypes
    
  */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom';

import { handletheInitialData }  from '../actions/shared'
import Routes from './Routes'
import NavBar from './NavBar';

class App extends Component {
  componentDidMount(){
    this.props.handletheInitialData()
  }
  render() {
    const { notLoggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <div className="main-container">
            <NavBar/>
            <Routes notLoggedIn={notLoggedIn}/>
          </div>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  handletheInitialData : PropTypes.func.isRequired,
  notLoggedIn: PropTypes.bool.isRequired
};

function mapStateToProps ({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handletheInitialData: () => {
      dispatch(handletheInitialData())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)