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
        const labelID = `question-options-list-label-${option.serial_order}`

        return (
          <QuestionOptionsListItem
            onClick={props.onClick}
            // value == QuestionOptionsListItem, ListItem key
            value={option.serial_order}
            checked={checked.indexOf(option.serial_order) !== -1}
            //labelID connects ListItemIcon and ListItemText in Question_Options_List_Item
            labelID={labelID}
            option_text={option.option_text}
          />
        )
      })}
    </List>
  )



  return (
    <Grid item sx className={styleClasses.item} mx={0} mb={4}>
      <Paper className={styleClasses.questionOptions}>
        Questions Options List
    </Paper>
    </Grid>
  )

}