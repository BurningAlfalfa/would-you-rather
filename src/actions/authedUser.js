import { Action } from "@remix-run/router";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const GET_AUTHED_USER = 'GET_AUTHED_USER'

export function setAuthedUser(id) {
  return{
    type:SET_AUTHED_USER,
    id
  }
  /*
  switch(Action.type){
    case SET_AUTHED_USER:
  return {
    type: SET_AUTHED_USER,
    id,
  }
  default:
    return id
  }
  */
}
export function isUserAuthed () {
  return {
    type: GET_AUTHED_USER
  }
}
