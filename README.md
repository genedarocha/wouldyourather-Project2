# The is the 2nd Project for React Programming via Udacity. 

This repo for the Would You Like Project -  [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

This project consists of using React with Redux where questions are created, a leaderboard is used, users are logged and authenticated, summary of all the registered users
It covers actions, reducers, middleware,apis and uses a _DATA.js source file. 



The application consists of several pages which are shown below. 

  1. [THE LOGIN PAGE ] : The login page uses a form and asks the user for a login before authenticating them and moving to the rest of the application. 
  <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur_login.png" height="250"/>

  2. [DEFAULT HOME PAGE] : This is the main home page with tabs showing answered and unanswered questions By Default, the unanswered questions are first and user can move to each tab, by clicking each different tab.   <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur__main_screen.png" height="250"/> 
  
   
  3. [LIST OF QUESTIONS PAGE] : The Question Page consists of a form. The user has to choose an option to answer the question.
  <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur_select_a_question.png" height="250"/>

  4. [INPUT/INSERT A QUESTION] : This page shows and prompts a user to ask/input/enter/create a question 
  <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur_newquestions.png" height="250"/>

  5. [OUTPUT AND RESULTS ] : This page shows the results of what a user has selected. 
  <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur_unanswered.png" height="250"/>
  <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur_answered.png" height="250"/>

  6. [LEADERBOARD PAGE] : This page shows how all the users are on the a leaderboard.
  <img src="https://github.com/genedarocha/wouldyourather-Project2/blob/master/public/images/wur_leaderboard.png" height="250"/>

## Project Setup and Installation 
  
 Step 1: Clone this project
  ```git clone https://github.com/genedarocha/wouldyourather-Project2.git```
  
 Step 2: Install all project dependencies (via npm)
 ```npm install```
 
 Step 3: Start the development server 
 ```npm start```

## License

MIT. Please see the [license file](LICENSE) for more information.

There is Progress Bar installed with the system by using
npm i react-js-loading-progress-bar 

Usage
Import LoadingProgress in your react component.

import LoadingProgress from 'react-js-loading-progress-bar';

 # would-you-rather

 Errors Found and Changes made after Submission 1

 1. ​ Error 1 
function Routes(props) {
  return <div className="container">
    <Switch>
      {
        props.notLoggedIn ? <Route path='/' exact component={Login}/> :
          <Fragment>
            <Route path='/' exact component={Dashboard} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            <Route path='/add' component={NewQuestion}/>
            <Route path="/questions/:id" component={QuestionDetails} />
            <Route exact path='/logout' component={Logout} />
          </Fragment>
      }
      <Route component={NotFound} />
REQUIRED
When a user is not logged in, they should be routed to the login page before determining if the page is a 404 or not. Please checkout this tutorial: tylermcginnis.com/react-router-protected-routes-authentication/

Changed to 

function Routes(props) {
  return <div className="container">
    <Switch>
      {
        props.notLoggedIn ? <Route path='/' exact component={Login}/> :
          <Fragment>
            <Route path='/' exact component={Dashboard} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            <Route path='/add' component={NewQuestion}/>
            <Route path="/questions/:id" component={QuestionDetails} />
            <Route exact path='/logout' component={Logout} />
            <Route component={NotFound} />
          </Fragment>
      }
    <Route path='/' exact component={Login}/>

2. Changed from notlogged in variables to isloggedIn variables
SUGGESTION
when naming variables, its best to use positive names, such as isLoggedIn, and use the !isLoggedIn for "not"

3. The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

to be evaluated in the next review


Submission 2 -

Error 1 - If a logged out user tries to access a page like http://localhost:3000/add this that only logged in users can see, you must redirect for the login page.

Also, when the user tries to access a page that doesn't exist, the user must be redirected to a 404 (Not Found) Page.

On both cases, I was redirected to the page below:
-FIXED 

Error 2 - The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

to be evaluated in the next review 
