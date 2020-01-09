import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Feedback from "../users/Feedback"

import SurveyListItem from '../users/SurveyListItem'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '47%',
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
  const [open, setOpen] = React.useState(false);

  const handleListItem = () => {
    //show feedback dialog or show the survey/completed survey preview
  }
  return (
    <List className={classes.root} subheader={<li />}>
      {/* <ul className={classes.ul}> */}
        {props.list.map(item => {
          return (
            <SurveyListItem
              title={item.name}
              onClick={handleListItem}
            >
            </SurveyListItem>
          )
        })}
      {/* </ul> */}
    </List>
  );
}
