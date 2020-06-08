  /*      File Name   : Index.js
          Date        : 31st May 2020
          Description : This is the standard index.js under middleware and setups a default thunk. 
  */
import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'


export default applyMiddleware(
    thunk,
    logger
)