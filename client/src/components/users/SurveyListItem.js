import React from "react";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Card from '@material-ui/core/Card';

const useStyle = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '1.25rem',
  },
  container: {
    width: '50%',
    height: '5rem',
    backgroundColor: '#e6af3a',
    margin: '0 auto',
    borderRadius: 10,
    marginTop: '2%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    },
  }
}))
export default function SurveyListItem(props) {
  const classes = useStyle()
  return (
    <Slide left cascade>
      <Card className={classes.container} onClick={props.onClick}>
        <p className={classes.title}>
          {props.title}
        </p>
      </Card>
    </Slide>
  );
}
