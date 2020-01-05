import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import SurveyListItem from '../users/SurveyListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#E2F2F9',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    margin: '0 auto',
    padding: 0,
    color: '#08648C'

  },
  listSection: {
    backgroundColor: 'inherit',
    padding: 0
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function PinnedSubheaderList(props) {
  const classes = useStyles();
  return (
    <List className={classes.root} subheader={<li />}>
      <ul className={classes.ul}>
        {props.list.map(item => {
          return (
            <SurveyListItem
              title={item}
              onClick={() => alert('hello')}
            >
            </SurveyListItem>
          )
        })}
      </ul>
    </List>
  );
}
