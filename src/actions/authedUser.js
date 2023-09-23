import { Action } from "@remix-run/router";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_LAST_VISITED_URL = 'SET_LAST_VISITED_URL';

export function setAuthedUser(id) {
  return{
    type:SET_AUTHED_USER,
    id
  }
}
export const setLastVisitedUrl = (url) => ({
  type: 'SET_LAST_VISITED_URL',
  payload: url,
});



export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export function isUserAuthed () {
  return {
    type: GET_AUTHED_USER
  }
}
