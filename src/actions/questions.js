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
export function addQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    const id = new Date().getTime().toString();
    const timeStamp = Date.now();
    const optionOne = { votes: [], text: optionOneText };
    const optionTwo = { votes: [], text: optionTwoText };
    const newQuestion = {
      timeStamp,
      id,
      author,
      optionOne,
      optionTwo,
    };

    // Save the new question to your backend/database here
    // Then dispatch the action:

    dispatch({
      type: ADD_QUESTION,
      question: newQuestion,
    });

    return newQuestion;
  };
}

// export function addQuestion(optionOne, optionTwo, author) {
//   return {
//     type: ADD_QUESTION,
//     question: newQuestion,
//     optionOne,
//     optionTwo,
//     author,
//   };
// }

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

