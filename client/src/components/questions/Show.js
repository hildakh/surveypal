import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
// import NextButton from './Button_Next.js';
// import BeforeButton from './Button_Before.js';
import BackToSurveyButton from './Back_To_Survey_Button.js';

let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: "sm",
    backgroundColor: "#f4a9a8"
  },
  grid: {
    padding: theme.spacing(0),
    alignItems: "center"
  },
  item: {
    margin: theme.spacing(.5)
  },
  question: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#95b6c9'
  },
  questionOptions: {
    margin: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#ff795f'
  }
}));

export default function Show(props) {

  const styleClasses = useStyles();

  return (

    <div className={styleClasses.root}>
      <Container maxWidth="sm" className={styleClasses.container}>
        <Grid container className={styleClasses.grid} direction="column">
          <Grid item xs={6} className={styleClasses.item} >
            <BackToSurveyButton onClick="{action('button-clicked')}" aligntems="flex-start"/>
          </Grid>
          <Grid item sx={6} className={styleClasses.item}>
            <Paper className={styleClasses.question}>Question goes here and how big is this grid item? Does it keep going and going and going?</Paper>
          </Grid>
          <Grid item sx={6} className={styleClasses.questionOptions} mb={4}>
            <Paper className={styleClasses.question}>Question options list goes here</Paper>
          </Grid>
        </Grid>
      </Container>

    </div>

  );
}