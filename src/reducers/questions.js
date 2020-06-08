  /*     File Name   : questions.js
          Date        : 31st May 2020
          Description : This is the reducer function that determines changes to an application’s state using 
          questions to RECEIVE_THE_QUESTIONS, ADD_A_QUESTION, SAVE_A_QUESTION_ANSWER
  */
import {RECEIVE_THE_QUESTIONS, ADD_A_QUESTION, SAVE_A_QUESTION_ANSWER} from '../actions/questions'

export default function questions (state = {}, action){
  switch(action.type){
    case RECEIVE_THE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_A_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case SAVE_A_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    default:
      return state
  }
}