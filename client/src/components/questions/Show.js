import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import NextButton from './Button_Next.js';
import BeforeButton from './Button_Before.js';
import BackToSurveyButton from './Back_To_Survey_Button.js';
import QuestionText from './Question_Text';
import QuestionOptionsList from './Question_Options_List';

// let classNames = require("classnames");

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

export default function Show(props) {

  const styleClasses = useStyles();

  return (

      <Container maxWidth="sm" height="100%" className={styleClasses.container} disableGutters="true" >

        <BackToSurveyButton onClick="{action('button-clicked')}" className={styleClasses.navButton} justify="flex-end"/>

        <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">

          <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
            <BeforeButton onClick="{action('button-clicked')}" />
          </Grid>

          <Grid container item xs={9} className={styleClasses.grid} alignItems="flex-start" justify="center">

              {props.question_text}

              {props.question_options_list}
          </Grid>

          <Grid container item xs className={styleClasses.navButton} justify="flex-end">
            <NextButton onClick="{action('button-clicked')}"  />
          </Grid>

        </Grid>

      </Container>

  );
}