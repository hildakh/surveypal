import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Show from './Show';
import QuestionText from './Question_Text';
import NextButton from './Button_Next.js';
import BeforeButton from './Button_Before.js';
import BackToSurveyButton from './Back_To_Survey_Button.js';
import QuestionOptionsList from './Question_Options_List';
import useSurveyData from '../../hooks/useSurveyData';

let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: "sm",
    // backgroundColor: "#f4a9a8"
  },
  navButton: {
    margin: 0,
    padding: 0,
    maxWidth: "10%"
  },
  grid: {
    padding: theme.spacing(0),
    width: "100%"
  },
  item: {
    margin: theme.spacing(.5)
  }
}));

export default function Index(props) {

  const styleClasses = useStyles();

  const {
    state,
    // setSurvey,
    navigateQuestions,
    recordQuestionResponse
  } = useSurveyData();
  // console.log(state.current_question)

  return (

      <Container maxWidth="sm" height="100%" className={styleClasses.container} disableGutters="true" >
        
        <BackToSurveyButton onClick={props.backToPreview} className={styleClasses.navButton} justify="flex-end"/>

      <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">
        {state.current_question.id > 1 && (
          <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
            <BeforeButton onClick={() => navigateQuestions(state.current_question.id, -1)} />
          </Grid>
        )}
        <Show
          question_description={<QuestionText description={state.current_question.description} />}
          question_options_list={<QuestionOptionsList questionType={state.current_question.question_type_id} questionOptions={state.current_options} />}
        />
        {state.current_question.id < 8 && (
          <Grid container item xs className={styleClasses.navButton} justify="flex-end">
            <NextButton onClick={() => navigateQuestions(state.current_question.id, 1)} />
          </Grid>
        )}
      </Grid>

    </Container>

  );
}