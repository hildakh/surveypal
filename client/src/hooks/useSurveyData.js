import { useReducer, useEffect } from "react";
import reducer, {
  SET_SURVEY,
  SET_QUESTION_RESPONSE,
  SET_NEXT_QUESTION

} from "../reducers/surveyReducer";

// dispatched actions will be handled by the reducer
// and will replace the current state. when the component renders,
// it will use the latest state to generate an updated view

export default function useSurveyData() {
  
  const initialState = {
    current_survey: {},
    current_question: {},
    question_responses: {},
    current_question_responses: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const surveyPromise = new Promise((resolve, reject) => {
    const survey = JSON.parse(localStorage.getItem('token')).surveys[0];
    survey.questions = JSON.parse(localStorage.getItem('token')).questions;
    resolve(survey)
  })

  useEffect(() => {
    surveyPromise.then((survey) => dispatch({ type: SET_SURVEY, value: survey}))
    .catch((err) => `useEffect survey promise error ${err}`)
  }, [])


  // const setSurvey = survey => dispatch({ type: SET_SURVEY, value: survey});

  const findNextQuestion = function(index, nav){ 
    let next_question = {}
    if (nav < 0) {
       next_question = state.current_survey.questions.find(question => (question.id === (state.current_question.id - 1)))
    }
    if (nav > 0) {
      next_question = state.current_survey.questions.find(question => (question.id === (state.current_question.id + 1)))
    }
    console.log(next_question)
    return next_question
  }

  const navigateQuestions = function(question_index, direction){
    const next_question = findNextQuestion(question_index, direction)
    return (
      dispatch({ type: SET_NEXT_QUESTION, value: next_question })
    )
  }
  
  const recordQuestionResponse = questionResponse => dispatch({ type: SET_QUESTION_RESPONSE, value: questionResponse})

  return {
    state,
    // setSurvey,
    navigateQuestions,
    recordQuestionResponse,
  }
};




 

