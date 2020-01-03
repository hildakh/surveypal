import React from "react";
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import { Box, Container, CssBaseline, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function BackToFullSurveyButton() {
  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.button} aria-label="go to full survey view" component="span">

      </IconButton>
      <input accept="???" className={classes.input} id="back-to-full-survey-btn" type="???" />
    </div>
  );
}