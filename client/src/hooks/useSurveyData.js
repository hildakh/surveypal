import React, { createContext, useReducer, useEffect, useContext } from "react";
import reducer, {
  SET_SURVEY,
  SET_QUESTION_RESPONSE,
  SET_NEXT_QUESTION,
  SET_CHECKED
} from "../reducers/surveyReducer";

// dispatched actions will be handled by the reducer
// and will replace the current state. when the component renders,
// it will use the latest state to generate an updated view

export default function useSurveyData() {
  
  const initialState = {
    current_survey: {},
    current_question: {},
    current_options: [],
    checked: [0],
    current_question_responses: []
  };


  // use the Provider component and useContext hook when you need to access survey state
  // when you need to manipulate survey state, call the dispatch method
  // wrap root survey component (questions > Index.js) in StateProvider
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const SurveyContext = createContext(state);
  const { Provider } = SurveyContext;

  const StateProvider = ( { children } ) => {
    // does this Provider need to have the state and dispatch value props when 
    // we only use dispatch here in useSurveyData?
    return <Provider value={{state, dispatch}}>{children}</Provider>;
  };

  // use the useContext Hook to access the survey state 
  const surveyState = useContext(SurveyContext)


  const surveyPromise = new Promise((resolve, reject) => {
    const survey = JSON.parse(localStorage.getItem('token')).surveys[0];
    survey.questions = JSON.parse(localStorage.getItem('token')).questions;
    resolve(survey)
  })

  useEffect(() => {
    surveyPromise.then((survey) => dispatch({ type: SET_SURVEY, value: survey}))
    .catch((err) => `SET_SURVEY useEffect survey promise error: ${err}`)
  }, [])


  // const setSurvey = survey => dispatch({ type: SET_SURVEY, value: survey});

  const findNextQuestion = function(index, direction){ 
    let next_question = {}
    if (direction < 0) {
       next_question = surveyState.current_survey.questions.find(item => (item.question.id === (index - 1)))
    }
    if (direction > 0) {
      next_question = surveyState.current_survey.questions.find(item => (item.question.id === (index + 1)))
    }
    return next_question
  }

  const navigateQuestions = function(question_index, direction){
    const next_question = findNextQuestion(question_index, direction)
    return (
      dispatch({ type: SET_NEXT_QUESTION, value: next_question })
    )
  }

  const setChecked = function(newChecked){
    return (
      dispatch({ type: SET_CHECKED, value: newChecked })
    )
  }

  const recordQuestionResponse = questionResponse => dispatch({ type: SET_QUESTION_RESPONSE, value: questionResponse})

  return {
    // use the Provider (StateProvider) component and useContext hook when we need to access survey state
    SurveyContext,
    StateProvider,
    navigateQuestions,
    recordQuestionResponse,
    setChecked
  }
};


 

