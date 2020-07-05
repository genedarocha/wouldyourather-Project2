  /*      File Name   : Routes.js
          Date        : 31st May 2020
          Description : This is the routes.js component file which routes to all the other files for the app. 
  */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import QuestionDetails from "./QuestionDetails"
import NotFound from "./NotFound"
import Logout from './Logout'
import connectRoute from './connectRoute'


const LoginWrapper = connectRoute(Login);
const DashboardWrapper = connectRoute(Dashboard);
const LeaderboardWrapper  = connectRoute(LeaderBoard);
const NewQuestionWrapper = connectRoute(NewQuestion);
const QuestionDetailsWrapper = connectRoute(QuestionDetails);
const LogoutWrapper = connectRoute(Logout);

function Routes(props) {
  return <div className="container">
    <Switch>
      {
        props.isLoggedIn ? <Route path='/' exact component={LoginWrapper}/> :
          <Fragment>
            <Route path='/' exact component={DashboardWrapper} />
            <Route path='/leaderboard' exact component={LeaderboardWrapper} />
            <Route path='/add' component={NewQuestionWrapper}/>
            <Route path="/questions/:id" component={QuestionDetailsWrapper} />
            <Route exact path='/logout' component={LogoutWrapper} />

          </Fragment>
      }
      <Route component={NotFound} /> 
    </Switch>
  </div>;
}

Routes.propTypes = {isLoggedIn: PropTypes.any};


export default Routes;

