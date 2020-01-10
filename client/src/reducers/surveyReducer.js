const SET_SURVEY_DATA = "SET_SURVEY_DATA";
const SET_CURRENT_SURVEY = "SET_CURRENT_SURVEY";
const SET_SURVEY_QUESTIONS = "SET_SURVEY_QUESTIONS";
const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";
const SET_CURRENT_QUESTION_OPTIONS = "SET_CURRENT_QUESTION_OPTIONS";
const SET_CURRENT_QUESTION_RESPONSES = "SET_CURRENT_QUESTION_RESPONSES";
const SET_QUESTION_OPTIONS = "SET_QUESTION_OPTIONS";
const SET_QUESTION_RESPONSES = "SET_QUESTION_RESPONSES";

export { 
  SET_SURVEY_DATA,
  SET_CURRENT_SURVEY,
  SET_SURVEY_QUESTIONS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_QUESTION_OPTIONS,
  SET_CURRENT_QUESTION_RESPONSES,
  SET_QUESTION_OPTIONS,
  SET_QUESTION_RESPONSES
};

export default function reducer(state, action) {
  // set state with all app data from api calls
  // initial state after getting data from api calls
  if (action.type === SET_SURVEY_DATA) {
    return ({
      ...state,
      current_survey: {},
      survey_questions: {},
      current_question: {},
      question_options: {},
      question_responses: {}
    });
  };

  // update which survey is currently selected
  if (action.type === SET_CURRENT_SURVEY) {
    return ({ ...state, current_survey: action.value });
  };
  // update survey questions for currently selected survey
  if (action.type === SET_SURVEY_QUESTIONS) {
    return ({ ...state, survey_questions = action.value})
  };
  if (action.type === SET_CURRENT_QUESTION) {
    return ({ ...state, current_question: action.value})
  };
  if (action.type === SET_CURRENT_QUESTION_OPTIONS) {
    return ({ ...state, current_question: action.value})
  };
  if (action.type === SET_CURRENT_QUESTION_RESPONSES) {

    // question response needs survey_response_id, question_option_id, and response_value
    // survey_response_id will be added when the responses are submitted to the database
    // const question_option_response = { question_option_id: action.value.question_option_id, 
    //                                    response_value: action.value.response_value }
    // const updated_responses = state.current_question_responses.push(question_option_response)

    return ({ ...state, current_question_responses: updated_responses})
  };
  if (action.type === SET_QUESTION_OPTIONS) {
    return ({ ...state, question_options: action.value})
  };
  if (action.type === SET_QUESTION_RESPONSES) {
    return ({ ...state, question_responses: action.value})
  };

  throw new Error(
    `tried to reduce with unsupported action type: ${action.type}`
  );

};