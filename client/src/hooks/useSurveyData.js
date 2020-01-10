import { useReducer, useEffect } from "react";
import reducer, {
  DISPATCH_ACTIONS_HERE
} from "reducers/surveyReducer";
import { SET_SURVEY_DATA } from "../reducers/surveyReducer";

// dispatched actions will be handled by the reducer
// and will replace the current state. when the component renders,
// it will use the latest state to generate an updated view

export default function useSurveyData() {

  const initialState = {
    surveys_for_user:[], 
    current_survey: {},
    survey_questions: {},
    current_question: {},
    current_question_responses: [],
    question_options: {},
    question_responses: {}
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // make request to get all survey data (surveys, current survey)
  useEffect(() => {  // data will already be there, access by instance variable
    Promise.all([    // so will this request be made this way, or differently?
      Promise.resolve(axios.get("api/surveys")) 
      Promise.resolve(axios.get("api/questions")), 
      Promise.resolve(axios.get("api/question_options"))
    ]).then((all) => dispatch({ type: SET_SURVEY_DATA, value: all}))
      .catch((error) => `useSurveyData useEffect Promises error: ${error}`)
  }, []);


  const setQuestion = question_index => dispatch({ type: SET_QUESTION, value: question_index })

  const setQuestionOptions = qusetion_id => dispatch({ type: SET_QUESTION_OPTIONS, value: question_id })

  const recordQuestionResponse = questionResponse => dispatch({ type: SET_QUESTION_RESPONSE, value: questionResponse})





}
