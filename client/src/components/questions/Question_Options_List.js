import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(.5)
  },
  questionOptions: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#ff795f'
  }
}));


export default function QuestionText(props) {

  const styleClasses = useStyles();

  return (
    <Grid item sx className={styleClasses.item} mx={0} mb={4}>
    <Paper className={styleClasses.questionOptions}> props.question-option Question options list goes here</Paper>
  </Grid>
  )

}