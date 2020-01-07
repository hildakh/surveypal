/* eslint no-restricted-globals:0 */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      < AppBar position="static" >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            SurveyPal
          </Typography>
          <div className={classes.grow} />
          <Login />
        </Toolbar>
      </AppBar >
    </div >
  );
}