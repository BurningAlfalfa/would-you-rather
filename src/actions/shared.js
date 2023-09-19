import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
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
      //dispatch(setAuthedUser(authedUser));
    })
    .catch(error => {
      console.error("Failed to get initial data:", error);
  });
  };
}


// export function handleNewData(optionOneText, optionTwoText, author) {
//   return (dispatch) => {
//     return saveQuestion({ optionOneText, optionTwoText, author }).then(
//       (question) => {
//         dispatch(addQuestion(question));
//       }
//     );
//   };
// }