import { SET_AUTHED_USER, SET_LAST_VISITED_URL, LOGOUT_USER,GET_AUTHED_USER } from '../actions/authedUser';
const initialState = {

    isAuthenticated: false,
    lastVisitedUrl: '/',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTHED_USER':
        return {
          ...state,
          isAuthenticated: true,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          isAuthenticated: false,
        };
      case 'SET_LAST_VISITED_URL':
        return {
          ...state,
          lastVisitedUrl: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  