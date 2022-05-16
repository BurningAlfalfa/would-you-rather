import { RECEIVE_USERS } from "../actions/users";
export default function users(state = {}, action) {
  console.log(state, action);
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
        users: action.payload,
      };

    default:
      return state;
  }
}
