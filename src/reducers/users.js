import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";
import { SET_AUTHED_USER, GET_AUTHED_USER} from "../actions/authedUser";
import { LOGOUT_USER } from "../actions/authedUser";
export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION_TO_USER:
                     console.log({action})

      return {
        ...state,
        [state.authedUser]:{
          ...state[state.authedUser], 
          questions: state[state.authedUser].questions.concat(action.qid)
        }   
      }

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
      case LOGOUT_USER:
        console.log("logout");
        return {
          ...state,
          authedUser: null,
        };
      case "VOTE":
        
        const { payload: { authedUser, option,questionId  } } = action
        console.log({state, authedUser, option,questionId, })
        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [questionId]: option,

            },
          },
        };  
         
    default:
      return state;
  }
}
