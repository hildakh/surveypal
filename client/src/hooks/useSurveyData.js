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


  
  const testQuestionOptionsList1 = [
    {
      question_id: 6,
      option_text: "Job loss",
      serial_order: 1
    },
    {
      question_id: 6,
      option_text: "Unable to pay rent or mortgage",
      serial_order: 2
    },
    {
      question_id: 6,
      option_text: "Illness or medical condition",
      serial_order: 3
    },
    {
      question_id: 6,
      option_text: "Addiction or substance use",
      serial_order: 4
    },
    {
      question_id: 6,
      option_text: "Unsafe housing conditions",
      serial_order: 5
    },
    {
      question_id: 6,
      option_text: "Experienced abuse by parent/guardian",
      serial_order: 6
    },
    {
      question_id: 6,
      option_text: "Experienced abuse by spouse/partner",
      serial_order: 7
    },
    {
      question_id: 6,
      option_text: "Conflict with parent/guardian",
      serial_order: 8
    },
    {
      question_id: 6,
      option_text: "Conflict with spouse/partner",
      serial_order: 9
    },
    {
      question_id: 6,
      option_text: "Incarcerated (jail or prison)",
      serial_order: 10
    },
    {
      question_id: 6,
      option_text: "Hospitalization or treatment program",
      serial_order: 11
    },
    {
      question_id: 6,
      option_text: "Eviction",
      serial_order: 12
    },
    {
      question_id: 6,
      option_text: "Other reason",
      serial_order: 13
    },
    {
      question_id: 6,
      option_text: "Don\'t know / No answer",
      serial_order: 14
    }
  ]
  const testQuestion1 = {
    id: 6,
    description: "What happened that caused you to lose your housing most recently?",
    serial_order: 1,
    question_type_id: 1,
    questionOptions: testQuestionOptionsList1
  }
  const testQuestionOptionsList2 = [
  
                  {
                    question_id: 7,
                    option_text: 'Welfare/income assistance',
                    serial_order: 1
                  },
                  {
                    question_id: 7,
                    option_text: 'Panhandling',
                    serial_order: 2
                  },
                  {
                    question_id: 7,
                    option_text: 'Binning/bottles',
                    serial_order: 3
                  },
                  {
                    question_id: 7,
                    option_text: 'Employment insurance',
                    serial_order: 4
                  },
                  {
                    question_id: 7,
                    option_text: 'Youth agreement',
                    serial_order: 5
                  },
                  {
                    question_id: 7,
                    option_text: 'Money from family/friends',
                    serial_order: 6
                  },
                  {
                    question_id: 7,
                    option_text: 'Job part-time or casual',
                    serial_order: 7
                  },
                  {
                    question_id: 7,
                    option_text: 'Job full-time',
                    serial_order: 8
                  },
                  {
                    question_id: 7,
                    option_text: 'CPP or other pension',
                    serial_order: 9
                  },
                  {
                    question_id: 7,
                    option_text: 'Honoraria',
                    serial_order: 10
                  },
                  {
                    question_id: 7,
                    option_text: 'Vending',
                    serial_order: 11
                  },
                  {
                    question_id: 7,
                    option_text: 'No income',
                    serial_order: 12
                  },
                  {
                    question_id: 7,
                    option_text: 'Other (specify)',
                    serial_order: 13
                  },
                  {
                    question_id: 7,
                    option_text: 'Don\'t know/No answer',
                    serial_order: 14
                  }
                ];
  const testQuestion2 = {
                          id: 7,
                          description: "What are your sources of income? Check all that apply",
                          serial_order: 2,
                          question_type_id: 1,
                          questionOptions: testQuestionOptionsList2
                        }
  const testQuestionList = [testQuestion1, testQuestion2];
  const testSurvey = {id: 1,
                      name: "Vancouver 2019 Sheltered Survey",
                      questions: testQuestionList}

  const initialState = {
    current_survey: testSurvey,
    current_question: testQuestionList,
    question_responses: {},
    current_question_responses: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setSurvey = survey => dispatch({ type: SET_SURVEY, value: testSurvey});

  const findNextQuestion = function(index, nav){ 
    next_question < 0 ? current_survey.questions.find(question => question.id === question_index--)
                      : current_survey.questions.find(question => question.id === question_index++)
  }

  const navigateQuestions = function(question_index, next_question){
    const next = findNextQuestion(question_index, next_question)
    return (
      dispatch({ type: SET_NEXT_QUESTION, value: next })
    )
  }
  
  const recordQuestionResponse = questionResponse => dispatch({ type: SET_QUESTION_RESPONSE, value: questionResponse})

  return {
    state,
    setSurvey,
    navigateQuestions,
    recordQuestionResponse,
  }
};




