import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Show from './Show';
import NextButton from './Button_Next.js';
import BeforeButton from './Button_Before.js';
import BackToSurveyButton from './Back_To_Survey_Button.js';
import useSurveyData from '../../hooks/useSurveyData';
import Button from '@material-ui/core/Button';


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
  },
  button: {
    margin: theme.spacing(1),
    background: "#e6af3a",
    borderColor: "black",
    color: "black",
    fontSize: 20,
    fontSize: '1rem',
    borderRadius: 5,
    fontFamily: "Muli",
    textTransform: 'none',
  }
}));

export default function Index(props) {

  const styleClasses = useStyles();

  const {
    //surveyState is the useContext hook with the store context from useSurveyData
    // use 
    SurveyContext,
    StateProvider,
    navigateQuestions
  } = useSurveyData();


  const surveyState = useContext(SurveyContext);


  return (
    // with StateProvider, the SurveyContext context component can be accessed from any component
    // in this component tree. To  do this, import useContext hook from react and
    // SurveyContext from useSurveyData
    <StateProvider>
      <Container maxWidth="sm" height="100%" disableGutters={true} >

        <BackToSurveyButton onClick={props.backToPreview} className={styleClasses.navButton} justify="flex-end" />

        <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">
          {surveyState.current_question.id > 1 && (
            <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
              <BeforeButton onClick={() => navigateQuestions(surveyState.current_question.id, -1)} />
            </Grid>
          )}

          <Show
            question_description={surveyState.current_question.description}
            question_options_list={surveyState.current_options}
            question={surveyState.current_question}
          />

          {surveyState.current_question.id < 8 && (
            <Grid container item xs className={styleClasses.navButton} justify="flex-end">
              <NextButton onClick={() => navigateQuestions(surveyState.current_question.id, 1)} />
            </Grid>
          )}
          {surveyState.current_question.id === 8 && (
            <Grid container item xs className={styleClasses.navButton} justify="flex-end">
              <Button onClick={props.backToSurveys} className={styleClasses.buttons}>
                Submit
                </Button>
            </Grid>
          )}
        </Grid>

      </Container>
    </StateProvider>

  );
}