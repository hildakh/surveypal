const SET_SURVEY = "SET_SURVEY";
const SET_NEXT_QUESTION = "SET_NEXT_QUESTION";
const SET_QUESTION_RESPONSE = "SET_QUESTION_RESPONSE";
const SET_QUESTION_RESPONSES = "SET_QUESTION_RESPONSES";

export { 
  SET_SURVEY,
  SET_NEXT_QUESTION,
  SET_QUESTION_RESPONSE,
  SET_QUESTION_RESPONSES
};

export default function reducer(state, action) {
  // initalize the survey by setting the survey passed in 
  // from app => index => useSurveyData
  if (action.type === SET_SURVEY) {
    
    const first_question = action.value.questions[0].question
    const first_question_options = action.value.questions[0].options
    return ({
      ...state,
      current_survey: action.value,
      current_question: first_question,
      current_options: first_question_options
    });
  };
  if (action.type === SET_NEXT_QUESTION) {




    return({
      ...state,
      current_question: action.value.question,
      current_options: action.value.options,
      current_question_responses: 
    })
  };



  ///////************/////////


  // update survey questions for currently selected survey
  // if (action.type === SET_SURVEY_QUESTIONS) {
  //   return ({ ...state, survey_questions = action.value})
  // };
  // if (action.type === SET_CURRENT_QUESTION) {
  //   return ({ ...state, current_question: action.value})
  // };
  // if (action.type === SET_CURRENT_QUESTION_OPTIONS) {
  //   return ({ ...state, current_question: action.value})
  // };
  // if (action.type === SET_CURRENT_QUESTION_RESPONSES) {

  //   // question response needs survey_response_id, question_option_id, and response_value
  //   // survey_response_id will be added when the responses are submitted to the database
  //   // const question_option_response = { question_option_id: action.value.question_option_id, 
  //   //                                    response_value: action.value.response_value }
  //   // const updated_responses = state.current_question_responses.push(question_option_response)

  //   return ({ ...state, current_question_responses: updated_responses})
  // };

  throw new Error(
    `tried to reduce with unsupported action type: ${action.type}`
  );

};