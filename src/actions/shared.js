import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { ActionTypes } from "@mui/base";
//const authedUser = "tylermcginnis";

export function handleInitalData() {
  return (dispatch) => {
    // dispatch(showLoading);
     return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));

      dispatch(receiveQuestions(questions));
      //dispatch(setAuthedUser(authedUser));
    });
  };
}
