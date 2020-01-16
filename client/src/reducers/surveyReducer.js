const SET_SURVEY = "SET_SURVEY";
const SET_NEXT_QUESTION = "SET_NEXT_QUESTION";
const SET_CHECKED = "SET_CHECKED";
const SET_QUESTION_RESPONSE = "SET_QUESTION_RESPONSE";

export { 
  SET_SURVEY,
  SET_NEXT_QUESTION,
  SET_CHECKED,
  SET_QUESTION_RESPONSE
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

  if (action.type === SET_CHECKED) {
    return ({
      ...state,
      checked: action.value
    })
  }

  if (action.type === SET_NEXT_QUESTION) {
    // update token with question options list items where checked=true
    // const update
    return({
      ...state,
      current_question: action.value.question,
      current_options: action.value.options,
      checked: [0]
      // current_question_responses: 
    })
  };

  throw new Error(
    `tried to reduce with unsupported action type: ${action.type}`
  );

};