import React from "react";
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import { Box, Container, CssBaseline, IconButton, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function BeforeButton() {
  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.button} aria-label="go to previous question" component="span">
        <NavigateBeforeIcon />
      </IconButton>
      <input accept="???" className={classes.input} id="icon-button-before" type="???" />
    </div>
  );
}