   /*     File Name   : questions.js
          Date        : 31st May 2020
          Description : This file sets up all the questions.js questions 
    
  */
export const RECEIVE_THE_QUESTIONS = 'RECEIVE_THE_QUESTIONS';
export const ADD_A_QUESTION = 'ADD_A_QUESTION';
export const SAVE_A_QUESTION_ANSWER = 'SAVE_A_QUESTION_ANSWER';

export function addAQuestion (question) {
  return {
    type: ADD_A_QUESTION,
    question
  }
}

export function receiveQuestions(questions){
  return{
    type: RECEIVE_THE_QUESTIONS,
    questions
  }
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_A_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}