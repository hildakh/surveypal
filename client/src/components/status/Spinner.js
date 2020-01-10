import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorCircularProgress = withStyles({
  root: {
    color: 'white',
    marginTop: '10px',
  },
})(CircularProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColorCircularProgress size={30} thickness={5} />
    </div>
  );
}