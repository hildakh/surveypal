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
    backgroundColor: "#f4a9a8"
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
  question: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#95b6c9'
  },
  questionOptions: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#ff795f'
  }
}));

export default function Show(props) {

  const styleClasses = useStyles();

  return (

      <Container maxWidth="sm" height="100%" className={styleClasses.container} disableGutters="true" >
        
        <BackToSurveyButton onClick="{action('button-clicked')}" className={styleClasses.navButton}/>

        <Grid container className={styleClasses.grid} direction="row" align="center" justify="center">
        
          <Grid container item xs className={styleClasses.navButton} justify="flex-start" >
            <BeforeButton onClick="{action('button-clicked')}" />
          </Grid>
        
          <Grid container item xs={9} className={styleClasses.grid} alignItems="flex-start" >
        
              <Grid item sx className={styleClasses.item} mx={0}>
                <Paper className={styleClasses.question}> props.question-text </Paper>
              </Grid>
        
              <Grid item sx className={styleClasses.item} mx={0} mb={4}>
                <Paper className={styleClasses.questionOptions}> props.question-options-list </Paper>
              </Grid>
        
          </Grid>
        
          <Grid container item xs className={styleClasses.navButton} justify="flex-end">
            <NextButton onClick="{action('button-clicked')}"  />
          </Grid>
        
        </Grid>     

      </Container>

  );
}