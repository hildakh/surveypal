import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(.5)
  },
  optionText: {
    fontFamily: "Muli"
  }
}));

const GreenCheckBox = withStyles({
  root: {
    color:  "#677B00",
    '&$checked': {
      color:  "#677B00",
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


export default function QuestionOptionsListItem(props) {
  
  const styleClasses = useStyles();

  const optionClass = classNames({
    "optionSelected": props.checked
  })

  return (
    <Grid item sx className={classNames(styleClasses.item, optionClass)} mx={0} mb={4}>
      <ListItem key={props.value} role={undefined} dense button divider onClick={props.onClick}>
        <ListItemIcon>
          <GreenCheckBox 
            edge="end"
            onClick={props.onClick}
            checked={props.checked}
            inputProps={props.inputProps}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText className={classNames(styleClasses.optionText)} id={props.labelId} primary={props.option_text}/>
      </ListItem>
    </Grid>
      )
}