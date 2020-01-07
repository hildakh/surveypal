import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Show from './Show';
import QuestionText from './Question_Text';
import NextButton from './Button_Next.js';
import BeforeButton from './Button_Before.js';
import BackToSurveyButton from './Back_To_Survey_Button.js';
import QuestionOptionsList from './Question_Options_List';

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

const testQuestionText = <QuestionText description="What happened that caused you to lose your housing most recently?"/>

const testQuestionOptionsList = [
  {question_id: 6,
    option_text: "Job loss",
    serial_order: 1
  },
  {question_id: 6,
    option_text: "Unable to pay rent or mortgage",
    serial_order: 2
  },
  {question_id: 6,
    option_text: "Illness or medical condition",
    serial_order: 3
  },
  {question_id: 6,
    option_text: "Addiction or substance use",
    serial_order: 4
  },
  {question_id: 6,
    option_text: "Unsafe housing conditions",
    serial_order: 5
  },
  {question_id: 6,
    option_text: "Experienced abuse by: parent/guardian",
    serial_order: 6
  },
  {question_id: 6,
    option_text: "Experienced abuse by: spouse/partner",
    serial_order: 7
  },
]

export default function Index(props) {

  const styleClasses = useStyles();

  return (

      <Container maxWidth="sm" height="100%" className={styleClasses.container} disableGutters="true" >
        
        <BackToSurveyButton onClick="{action('button-clicked')}" className={styleClasses.navButton} justify="flex-end"/>

        <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">
        
          <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
            <BeforeButton onClick="{action('button-clicked')}" />
          </Grid>

          <Show question_text={testQuestionText} question_options_list={<QuestionOptionsList questionOptions={testQuestionOptionsList}/>} />
        
          <Grid container item xs className={styleClasses.navButton} justify="flex-end">
            <NextButton onClick="{action('button-clicked')}"  />
          </Grid>
        
        </Grid>     

      </Container>

  );
}