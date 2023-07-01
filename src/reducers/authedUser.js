export default function authedUser(state = null, action) {
  console.log({ action });
  switch (action.type) {
    case GET_AUTHED_USER:
      return state;
    case SET_AUTHED_USER:
      console.log({
        ...state,
        authedUser: action.id,
      });
      return {
        ...state,
        authedUser: action.id,
      };

    default:
      return state;
    /*if (action.type === SET_AUTHED_USER) {
    return action.id;
  }
  return state;*/
  }
}
