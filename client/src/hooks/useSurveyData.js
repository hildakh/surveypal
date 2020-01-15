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
    checked: []
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  // use the Provider component and useContext hook to access survey state
  // to manipulate survey state, call the dispatch method
  // wrap root survey component (questions > Index.js) in StateProvider
  
  const SurveyContext = createContext(state);
  const { Provider } = SurveyContext;

  const StateProvider = ( { children } ) => {
    return <Provider value={{state, dispatch}}>{children}</Provider>;
  };

  // survey state accessed using the context Hook
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

  const recordQuestionResponse = function(optionId) {
    let existing = JSON.parse(localStorage.getItem("token"))
    console.log(`current question id: ${state.current_question.id}`)
    
    // let optionIndex = parseInt(optionId) - 1
    // go through list of questions in local storage
    // look for the checked option ID in its list of options
    // if it is, set or toggle isSelected value in that option (T/F)
    existing.questions.forEach(item => {
        item.options.forEach(option => {
          if (option.id === parseInt(optionId)) {
            console.log(`option.id from localStorage: ${option.id} <<<>>> optionId passed in from survey option: ${parseInt(optionId)}`)
            if ("isSelected" in option) {
              option.isSelected =
               !option.isSelected
            } else {
              option.isSelected = true
            }
          }
        })
      }
    )
    localStorage.setItem("token", JSON.stringify(existing))
  }

  const setChecked = function(newChecked){
    return (
      dispatch({ type: SET_CHECKED, value: newChecked })
    )
  }

  const handleToggle = value => () => {
    const currentIndex = state.checked.indexOf(value);
    const newChecked = [...state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    recordQuestionResponse(value);
    setChecked(newChecked);
  };

  return {
    // use the Provider (StateProvider) component and useContext hook when we need to access survey state
    SurveyContext,
    StateProvider,
    navigateQuestions,
    handleToggle,
    surveyState
  }
};


 

