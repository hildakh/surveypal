import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, List } from '@material-ui/core';

import QuestionOptionsListItem from './Question_Options_List_Item';

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(.5)
  },
  questionOptions: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#ff795f'
  }
}));


export default function QuestionOptionsList(props) {

  const styleClasses = useStyles();
  const [checked, setChecked] = React.useState([0]);


  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List >
      {props.questionOptions.map(option => {
        
        const value = `${option.serial_order}`
        const labelID = `question-options-list-label-${value}`
        
        return (
          <QuestionOptionsListItem
            onClick={handleToggle(value)}
            // value == QuestionOptionsListItem, ListItem key
            value={value}
            checked={checked.indexOf(value) !== -1}
            //labelID connects ListItemIcon and ListItemText in Question_Options_List_Item
            labelID={labelID}
            option_text={option.option_text}
            inputProps={{ 'aria-laballedby': labelID}}
          />
        )
      })}
    </List>
  )
}