import React from "react";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyle = makeStyles(theme => ({
  title: {
    textAlign: 'left',
    marginLeft: '10px',
    cursor: 'pointer'
  }
}))
export default function CompSurvListItem(props) {
  const classes = useStyle()

  return (
    <ListItem>
      <ListItemText className={classes.title} primary={props.title} secondary={props.date} />
      <Divider />
    </ListItem>
  );
}
