import { getInitialData } from "../utils/api";
import { addQuestionToUser, receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { _saveQuestion } from "../utils/_DATA";
import { saveQuestion } from "../utils/api";
import { addQuestion } from "../actions/questions";
//const authedUser = "tylermcginnis";

export function handleInitalData() {
  return (dispatch) => {
    // dispatch(showLoading);
     return getInitialData()
     .then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // dispatch(addQuestion(questions));
      // dispatch(addQuestionToUser(users));
      //dispatch(setAuthedUser(authedUser));
    })
    .catch(error => {
      console.error("Failed to get initial data:", error);
  });
  };
}


