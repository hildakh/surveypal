import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(.5)
  },
  question: {
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius:"10px",
    backgroundColor: '#e6af3a',
    fontFamily: "Muli"
  }
}));


export default function QuestionText(props) {

  const styleClasses = useStyles();

  return (
    <Grid item xs className={styleClasses.item} mx={0}>
    <Paper className={styleClasses.question}>
      {props.description}
    </Paper>
    </Grid>
  )

}