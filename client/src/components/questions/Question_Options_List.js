import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import QuestionOptionsListItem from './Question_Options_List_Item';
import useSurveyData from '../../hooks/useSurveyData';

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

  const {
    handleToggle,
    surveyState
  } = useSurveyData();

  const checked = surveyState.checked;

  return (
    <List >
      {props.questionOptions.map(option => {
        
        const value = `${option.id}`
        const labelID = `question-options-list-label-${value}`
        
        return (
          <QuestionOptionsListItem
            onClick={handleToggle(value)}
            key={value}
            value={value}
            checked={checked.indexOf(value) !== -1}
            //labelID connects ListItemIcon and ListItemText in Question_Options_List_Item
            labelID={labelID}
            option_text={option.option_text}
            inputProps={{ 'aria-labelledby': labelID}}
          />
        )
      })}
    </List>
  )
}