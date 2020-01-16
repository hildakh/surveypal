import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import QuestionOptionsListItem from './Question_Options_List_Item';
import useSurveyData from '../../hooks/useSurveyData';
import { Checkbox, Typography } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

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
  const questions = JSON.parse(localStorage.getItem('token')).questions
  // console.log(questions);

  const {
    handleToggle,
    surveyState
  } = useSurveyData();

  let checked = false;
  // const questionType = props.question.question_type_id;
  // console.log(questionType);

  return (
    // <div className={classes.root}>
    //   {props.question.options.map(item => (

    //     <Typography align="left" style={{ fontFamily: 'Muli' }}>
    //       {props.question.question.question_type_id === 1 && (
    //         <Checkbox
    //           checked={checked.indexOf(value) !== -1}
    //           // onChange={handleChange}
    //           key={value}
    //           value={value}
    //           inputProps={{ "aria-label": "primary checkbox" }}
    //         ></Checkbox>
    //       )}
    //       {props.question.question.question_type_id === 2 && (
    //         <Radio
    //           checked={checked.indexOf(value) !== -1}
    //           // onChange={radioHandleChange}
    //           key={value}
    //           value={value}
    //           name="radio-button-demo"
    //           inputProps={{ 'aria-label': 'A' }}
    //         />
    //       )}
    //       {props.question.question.question_type_id === 5 && (
    //         <TextField id="standard-basic" style={{ marginBottom: "3%" }}
    //         />
    //       )}
    //       {item.option_text}
    //     </Typography>
    //   ))}
    // </div>
    <List >
      {props.questionOptions.map(option => {
        const question = questions.filter(item => {
          // console.log(option.question_id);
          // console.log(item.question.id);
          return item.question.id === option.question_id;
        })
        // console.log(question);
        // console.log(option);
        const value = `${option.id}`
        const labelID = `question-options-list-label-${value}`
        const checkedOptions = question[0].options.filter(selected => {
          return selected.isSelected
        });
        checkedOptions.forEach(element => {
          element.id === option.id ? checked = true : checked = false;
        });

        return (
          <Typography align="left" style={{ fontFamily: 'Muli' }}>
            {question[0].question.question_type_id === 1 && (
              <Checkbox
                checked={checked}
                onClick={handleToggle(value)}
                key={value}
                value={value}
                inputProps={{ "aria-label": "primary checkbox" }}
              ></Checkbox>
            )}
            {question[0].question.question_type_id === 2 && (
              <Radio
                checked={checked}
                onClick={handleToggle(value)}
                key={value}
                value={value}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
            )}
            {question[0].question.question_type_id === 5 && (
              <TextField id="standard-basic" style={{ marginBottom: "3%" }}
              />
            )}
            {option.option_text}

            {/* <QuestionOptionsListItem
            onClick={handleToggle(value)}
            key={value}
            value={value}
            checked={checked}
            //labelID connects ListItemIcon and ListItemText in Question_Options_List_Item
            labelID={labelID}
            option_text={option.option_text}
            inputProps={{ 'aria-labelledby': labelID }}
          /> */}
          </Typography>
        )
      })}
    </List>
  )
}