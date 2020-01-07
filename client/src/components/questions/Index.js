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

const testQuestion1 = {id: 6, description: "What happened that caused you to lose your housing most recently?"}
const testQuestion2 = {id: 7, description: "What are your sources of income? Check all that apply"}

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
    option_text: "Experienced abuse by: parent/guardian",
    serial_order: 6
  },
  {
    question_id: 6,
    option_text: "Experienced abuse by: spouse/partner",
    serial_order: 7
  },
]
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
    serial_order: 4
  },
  {
    question_id: 7,
    option_text: 'Employment insurance',
    serial_order: 5
  },
  {
    question_id: 7,
    option_text: 'Youth agreement',
    serial_order: 6
  },
  {
    question_id: 7,
    option_text: 'Money from family/friends',
    serial_order: 7
  },
  {
    question_id: 7,
    option_text: 'Job part-time or casual',
    serial_order: 8
  },
  {
    question_id: 7,
    option_text: 'Job full-time',
    serial_order: 9
  },
  {
    question_id: 7,
    option_text: 'CPP or other pension',
    serial_order: 10
  },
  {
    question_id: 7,
    option_text: 'Honoraria',
    serial_order: 11
  },
  {
    question_id: 7,
    option_text: 'Vending',
    serial_order: 12
  },
  {
    question_id: 7,
    option_text: 'No income',
    serial_order: 13
  },
  {
    question_id: 7,
    option_text: 'Other (specify)',
    serial_order: 14
  },
  {
    question_id: 7,
    option_text: 'Don\'t know/No answer',
    serial_order: 15
  }
];

const testQuestionList = [testQuestion1, testQuestion2];

export default function Index(props) {

  const styleClasses = useStyles();

  return (

      <Container maxWidth="sm" height="100%" className={styleClasses.container} disableGutters="true" >
        
        <BackToSurveyButton onClick="{action('button-clicked')}" className={styleClasses.navButton} justify="flex-end"/>

        <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">
        
          <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
            <BeforeButton onClick="{action('button-clicked')}" />
          </Grid>

          <Show 
            question_text={<QuestionText description={testQuestion1.description}/>}
            question_options_list={<QuestionOptionsList questionOptions={testQuestionOptionsList1}/>} 
          />
        
          <Grid container item xs className={styleClasses.navButton} justify="flex-end">
            <NextButton onClick="{action('button-clicked')}"  />
          </Grid>
        
        </Grid>     

      </Container>

  );
}