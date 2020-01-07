import React from "react";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  title: {
    textAlign: 'left',
    marginLeft: '10px',
    cursor: 'pointer'
  }
}))
export default function SurveyListItem(props) {
  const classes = useStyle()

  return (
    <li onClick={props.onClick}>
      <p className={classes.title}>
        {props.title}
      </p>
      <Divider />
    </li>
  );
}
