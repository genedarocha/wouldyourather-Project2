  /*     File Name   : authedUser.js
          Date        : 31st May 2020
          Description : This is the authedUser.js which checks via actions to see an authorised user.
  */
import { SET_AUTHORISED_USER, UNSET_AUTHORISED_USER } from '../actions/authedUser'

export default function authedUser(state=null, action){
    switch (action.type){
        case SET_AUTHORISED_USER:
            return action.id;
        case UNSET_AUTHORISED_USER :
            return null;
          default :
            return state
    }
}