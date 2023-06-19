import { SET_AUTHED_USER,GET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch(action.type) {
        case GET_AUTHED_USER:
            return state
        case SET_AUTHED_USER:
            return{
            ...state,
            authedUser:action.id
            }
       
        default:
            return state
  /*if (action.type === SET_AUTHED_USER) {
    return action.id;
  }
  return state;*/
}
}
