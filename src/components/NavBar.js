  /*      File Name   : NavBar.js
          Date        : 31st May 2020
          Description : This is the NavBar.js file which shows the standard navigation bar across the app. 
  */
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link , withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, { PureComponent, Fragment } from "react";
import User from "./User";
import LoadingProgress from 'react-js-loading-progress-bar';

class NavBar extends PureComponent {
  state = {
    isOpen: false
  };

  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { authedUser } = this.props;

    return (
      <div>
              <LoadingProgress
          active={true}
          total={this.state.total}
          current={this.state.current}
          visualOnly       
        />
        <Navbar bg="primary" variant="dark" light expand="md">
        <center><img className="logo" 
                  src={`../images/wouldyourather.jpg`} alt="logo" height="250" width="250" /></center>
        <center><img className="blank" 
                  src={`../images/blank.jpg`} alt="blank" height="250" width="250" /></center>
        <center><img className="blank" 
                  src={`../images/blank.jpg`} alt="blank" height="250" width="100" /></center>
          <NavbarBrand tag={Link} to="/"><b><center>          Would You Rather Game App</center></b></NavbarBrand>
          {authedUser &&
          <Fragment>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <User id={authedUser}/>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/add">New Question</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">LeaderBoard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/logout'>Logout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
          }
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  authedUser: PropTypes.string,
};

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps, null)(NavBar))
