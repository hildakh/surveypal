import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import SurveyListItem from '../users/SurveyListItem'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    backgroundColor: '#E2F2F9',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%',
    margin: '0 auto',
    padding: 0,
    color: '#08648C',
    marginTop: '10%'

  }
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
    <div>
      {props.list.map(item => {
        return (
          <SurveyListItem
            title={item.name}
            onClick={props.onClick}>
          </SurveyListItem>
        )
      })}
      {item2 && (
        <SurveyListItem style={{ marginTop: '5%' }}
          title={'Vancouver Homeless Health Survey'}
          onClick={props.onClick}>
        </SurveyListItem>
      )}

      {item3 && (
        <SurveyListItem
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
