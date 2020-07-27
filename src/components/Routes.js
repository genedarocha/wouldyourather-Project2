  /*      File Name   : Routes.js
          Date        : 31st May 2020
          Description : This is the routes.js component file which routes to all the other files for the app. 
  */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import NewQuestion from './NewQuestion'
import QuestionDetails from './QuestionDetails'
import NotFound from './NotFound'
import Logout from './Logout'
import connectRoute from './connectRoute'
import WithUser from './WithUser'


// To have access to React Router match props, you need to pass in the props here. Something like this:
// <Route path="/questions/:id" component={({match}) => ( <WithUser isLoggedIn={isLoggedIn}> <QuestionDetailsWrapper match={match} /> </WithUser> )} />


const LoginWrapper = connectRoute(Login)
const DashboardWrapper = connectRoute(Dashboard)
const LeaderboardWrapper = connectRoute(LeaderBoard)
const NewQuestionWrapper = connectRoute(NewQuestion)
const QuestionDetailsWrapper = connectRoute(QuestionDetails)
const LogoutWrapper = connectRoute(Logout)
function Routes({ isLoggedIn }) {
  return (
    <div className="container">
      <Switch>
        <Route path="/login/"  
                  exact component={LoginWrapper} />
        <Route
                  path="/" 
                  exact component={() => (
                        <WithUser isLoggedIn={isLoggedIn}>
                        <DashboardWrapper />
                       </WithUser>
          )}
        />
        <Route
        
                  path="/leaderboard" 
                  component={({match}) => ( 
                  <WithUser isLoggedIn={isLoggedIn}>
                      <LeaderboardWrapper />
                  </WithUser>
          )}
        />
        <Route
                  path="/add/:id/" 
                  component={({match}) => ( 
                  <WithUser isLoggedIn={isLoggedIn}> 
                    <NewQuestionWrapper  match={match} />
                  </WithUser>
        )}
        />
        <Route    path="/questions/:id" 
                  component={({match}) => ( 
                  <WithUser isLoggedIn={isLoggedIn}> 
                     <QuestionDetailsWrapper match={match} /> 
                  </WithUser> 
        
        )}
        />

        <Route exact path="/logout" 
                  component={LogoutWrapper} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

Routes.propTypes = { isLoggedIn: PropTypes.bool.isRequired }

export default Routes
