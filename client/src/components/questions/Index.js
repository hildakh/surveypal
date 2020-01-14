import React, { useReducer, useContext } from "react";
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
    //surveyState is the useContext hook with the store context from useSurveyData
    // use 
    SurveyContext,
    StateProvider,
    navigateQuestions,
    updateChecked,
    recordQuestionResponse
  } = useSurveyData();

  const surveyState = useContext(SurveyContext);
  console.log("SHOW me the surveyState, y'all", surveyState);


  return (
    // with StateProvider, the SurveyContext context component can be accessed from any component
    // in this component tree. To  do this, import useContext hook from react and
    // SurveyContext from useSurveyData
    <StateProvider>
    <Container maxWidth="sm" height="100%" disableGutters={true} >

      <BackToSurveyButton 
        onClick={() => navigateQuestions(surveyState.current_question.id, -1)}
        className={styleClasses.navButton} justify="flex-end"
      />

      <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">

        <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
          <BeforeButton 
            onClick={() => navigateQuestions(surveyState.current_question.id, -1)}
          />
        </Grid>

        <Show
          // mania={surveyState}
          question_description={surveyState.current_question.description}
          question_options_list={surveyState.current_options}
        />

        <Grid container item xs className={styleClasses.navButton} justify="flex-end">
          <NextButton 
            onClick={() => navigateQuestions(surveyState.current_question.id, 1)}
          />
        </Grid>

      </Grid>

    </Container>
    </StateProvider>

  );
}