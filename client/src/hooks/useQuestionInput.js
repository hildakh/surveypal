import { useReducer, useEffect } from "react";

// things that need to happen:

//from api (survey model):
// get survey questions (with question, question type, and question order)
// get question options for questions in survey (with question_id)

// state to be set, used, and updated:
// current survey
// set of questions for survey
// question options for questions in survey
// current question
// question options for current question
// question responses for survey in progress

// to be stored in local storage:
// everything


// show current question
// transition to next question
// transition to previous question
// transition to full survey view