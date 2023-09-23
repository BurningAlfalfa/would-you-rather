import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToQuestion } from "../actions/questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
// export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
// export const vote = "VOTE";


export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function vote(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
  };
}

// export function handleSaveQuestionAnswer(authUser, qid, answer) {
//   return (dispatch) => {
//     dispatch(addAnswerToUser(authUser, qid, answer));
//     dispatch(addAnswerToQuestion(authUser, qid, answer));

//     return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
//       console.warn("Error in handleSaveQuestionAnswer:", e);
//     });
//   };
// }

export function addQuestionToUser({  id, qid }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    qid
  };
}

