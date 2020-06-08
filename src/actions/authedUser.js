   /*     File Name   : authedUser.js
          Date        : 31st May 2020
          Description : This file setups a lit of Authenticated Users JS file
    
  */


export const SET_AUTHORISED_USER = 'SET_AUTHORISED_USER';
export const UNSET_AUTHORISED_USER = 'UNSET_AUTHORISED_USER'

export function setAuthedUser(id){
  return {
    type: SET_AUTHORISED_USER,
    id
  }
}

export function unsetAuthedUser () {
  return {
    type: UNSET_AUTHORISED_USER
  }
}
