  /*     File Name   : authedUser.js
          Date        : 31st May 2020
          Description : This is the reducer function that determines changes to an application’s state using 
          combineReducers, authedUser,users and questions
  */


import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
  authedUser,
  users,
  questions,
})