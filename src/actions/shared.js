   /*     File Name   : shared.js
          Date        : 31st May 2020
          Description : This file has all the shared info across the app. 
    
  */
import { getInitialData } from '../utils/api'
import { addUserQuestion, saveUserAnswer, receiveUsers } from '../actions/users'
import { addAQuestion, receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export function handletheInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions})=> {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions))
        })
    }
}

export function handleaddAQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addAQuestion(question));
            dispatch(addUserQuestion(authedUser, question.id))
        })

    }
}

export function handleAnswer (qid, option) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const info = {
        authedUser: authedUser,
        qid,
        answer: option
      };
      _saveQuestionAnswer(info)
          .then(() => {
              dispatch(saveQuestionAnswer(authedUser, qid, option));
              dispatch(saveUserAnswer(authedUser, qid, option))
          })
    }
}