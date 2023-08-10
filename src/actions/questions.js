import { saveQuestion } from "../utils/api";
//import { addQuestionToUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswerToQuestion(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer,
  };
}

export function addQuestion(optionOne, optionTwo, author) {
  return {
    type: ADD_QUESTION,
    optionOne,
    optionTwo,
    author,
  };
}

// export function handleSaveQuestion(optionOneText, optionTwoText, author) {
//   return (dispatch) => {
//     return saveQuestion({ optionOneText, optionTwoText, author }).then(
//       (question) => {
//         dispatch(addQuestion(question));
//         // dispatch(addQuestionToUser(question));
//       }
//     );
//   };
// }

