import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Slide from 'react-reveal/Slide';

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
  return (
    <Slide left cascade>
      {props.list.map(item => {
        return (
          <SurveyListItem
            title={item.name}
            onClick={props.onClick}>
          </SurveyListItem>
        )
      })}
      <SurveyListItem style={{ marginTop: '5%' }}
        title={'Vancouver Homeless Health Survey'}
        onClick={props.onClick}>
      </SurveyListItem>
      <SurveyListItem
        title={'Vancouver Homeless Youth Survey'}
        onClick={props.onClick}>
      </SurveyListItem>
      <SurveyListItem
        title={'Vancouver Homeless Aboriginal Survey'}
        onClick={props.onClick}>
      </SurveyListItem>
    </Slide>
  );
}
