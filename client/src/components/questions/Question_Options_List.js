import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, List } from '@material-ui/core';
import { Checkbox, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

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
  // const [checked, setChecked] = React.useState(false)
  const handleChange = () => {
    setChecked(true);
  }
  return (
    <div >
      {props.questionOptions.map(item => (
        <Typography align="left" style={{ fontFamily: 'Muli' }}>
          {props.questionType === 1 && (
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              value="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            ></Checkbox>
          )}
          {props.questionType === 2 && (
            <Radio
              // checked={selectedValue === 'a'}
              // onChange={radioHandleChange}
              // value="a"
              name="radio-button-demo"
            // inputProps={{ 'aria-label': 'A' }}
            />
          )}
          {props.questionType === 5 && (
            <TextField id="standard-basic" style={{ marginBottom: "3%" }}
            />
          )}
          {item.option_text}
        </Typography>
      ))}
    </div>
    /* <List >
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
              inputProps={{ 'aria-laballedby': labelID }}
            />
          )
        })}
      // </List> */
  )
}