import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SurveyListItem from '../users/SurveyListItem'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '5%',
  },
}));

export default function SurveyList(props) {
  const classes = useStyles();
  const [item2, setItem2] = React.useState(false);
  const [item3, setItem3] = React.useState(false);
  const [item4, setItem4] = React.useState(false);

  setTimeout(() => {
    setItem2(true);
  }, 100);
  setTimeout(() => {
    setItem3(true);
  }, 300);
  setTimeout(() => {
    setItem4(true);
  }, 500);

  return (
    <div className={classes.root}>
      {props.list.map(item => {
        return (
          <SurveyListItem
            title={item.name}
            onClick={props.onClick}>
          </SurveyListItem>
        )
      })}
      {item2 && (
        <SurveyListItem
          title={'Vancouver Homeless Health Survey'}
          onClick={props.onClick}>
        </SurveyListItem>
      )}

      {item3 && (
        <SurveyListItem
          className={classes.col}
          title={'Vancouver Homeless Youth Survey'}
          onClick={props.onClick}>
        </SurveyListItem>
      )}
      {item4 && (
        <SurveyListItem
          title={'Vancouver Homeless Aboriginal Survey'}
          onClick={props.onClick}>
        </SurveyListItem>
      )}

    </div>
  );
}
