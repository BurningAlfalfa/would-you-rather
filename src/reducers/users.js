import { RECEIVE_USERS } from "../actions/users";
import { SET_AUTHED_USER, GET_AUTHED_USER } from "../actions/authedUser";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
        // users: action.payload,
      };
    case GET_AUTHED_USER:
      return state;
    case SET_AUTHED_USER:
      /* console.log({
        ...state,
        authedUser: action.id,
      });*/
      return {
        ...state,
        authedUser: action.id,
      };
      case "VOTE":
               console.log({action})

        return{
        ...state,
        [action.payload.userId]: {...state[action.payload.userId] , answers: {...state[action.payload.userId].answers, [action.payload.questionId]: action.payload.vote}}      
        

        }  
         
    default:
      return state;
  }
}
