import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;
      console.log(questions);

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser),
          },
        },
      };
    case ADD_QUESTION:
      const { question } = action;
      const { optionOne, optionTwo, author,timeStamp,id} = question;
      // const id = new Date().getTime();
      return {
        ...state,
        [id]: {
          id,
          author,
          optionOne: {
            votes: [],
            text: optionOne.text,

          },

          optionTwo: {
            votes: [],
            text: optionTwo.text,
          },
          timeStamp
        },
      };
    case "VOTE":
      console.log({ action });
      const { payload: { questionId, option, authedUser } } = action
      
      
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [option]: {
            ...state[questionId][option],
            votes: [...state[questionId][option].votes, authedUser
              
            ],
          },
        },
      };
    default:
      return state;
  }
}
