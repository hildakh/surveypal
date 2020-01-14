import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import QuestionText from "./Question_Text";
import QuestionOptionsList from "./Question_Options_List";

// let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(0),
    width: "100%"
  }
}));

export default function Show(props) {

  const styleClasses = useStyles();

  return (
    <Grid container item xs={9} className={styleClasses.grid} alignItems="flex-start" justify="center">

      <QuestionText
        description={props.question_description}
      />
{/* 
      <QuestionOptionsList
        questionOptions={props.question_options_list}
      /> */}
      
    </Grid>

  );
}