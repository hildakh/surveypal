import React from "react";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  title: {
    textAlign: 'left',
    marginLeft: '1%',
    cursor: 'pointer',
  },
  container: {
    marginTop: '5%'
  }
}))
export default function SurveyListItem(props) {
  const classes = useStyle()
  return (
    <div onClick={props.onClick}>
      <p className={classes.title}>
        {props.title}
      </p>
    </div>
  );
}
