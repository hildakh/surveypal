import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import NextButton from './Button_Next.js';
import BeforeButton from './Button_Before.js';
import BackToSurveyButton from './Back_To_Survey_Button.js';

// let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: "sm",
    // backgroundColor: "#f4a9a8"
  },
  grid: {
    padding: theme.spacing(0),
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

      <Container maxWidth="sm" className={styleClasses.container} disableGutters="true" >
        
        <BackToSurveyButton onClick="{action('button-clicked')}" alignItems="flex-end"/>

        <Grid container direction="row" >
        
          <Grid container item xs={3} justify="flex-start">
            <BeforeButton onClick="{action('button-clicked')}" />
          </Grid>
        
          <Grid container item xs={3} className={styleClasses.grid} alignItems="flex-start" justify="center">
        
              <Grid item sx={6} className={styleClasses.item}>
                <Paper className={styleClasses.question}>props.question-text >> Question text goes here.</Paper>
              </Grid>
        
              <Grid item sx={6} className={styleClasses.questionOptions} mb={4}>
                <Paper className={styleClasses.question}> props.question-options-list >> Question options list goes here</Paper>
              </Grid>
        
          </Grid>
        
          <Grid container item xs={3} justify="flex-end">
            <NextButton onClick="{action('button-clicked')}"  />
          </Grid>
        
        </Grid>     

      </Container>

  );
}