import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(.5)
  },
  optionSelected: {
    backgroundColor: "#ffdbd9"
  }
}));


export default function QuestionOptionsListItem(props) {

  const styleClasses = useStyles();

  return (
    <Grid item xs className={classNames(styleClasses.item)} mx={0} mb={4}>
      <ListItem  role={undefined} dense button divider >
        <ListItemIcon>
          <Checkbox
            edge="end"
            onClick={props.onClick}
            checked={props.checked}
            inputProps={props.inputProps}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={props.labelId} primary={props.option_text}/>
      </ListItem>
    </Grid>
      )
}