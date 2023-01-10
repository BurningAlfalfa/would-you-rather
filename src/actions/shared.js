import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { ActionTypes } from "@mui/base";
//const authedUser = "tylermcginnis";

export function handleInitalData() {
  return (dispatch) => {
    // dispatch(showLoading);
  console.log("adfas")
    return getInitialData().then(({ users, questions }) => {
      console.log({users})
      dispatch(receiveUsers(users));
      console.log("test", users);

      dispatch(receiveQuestions(questions));
      //dispatch(setAuthedUser(authedUser));
    });
  };
}
