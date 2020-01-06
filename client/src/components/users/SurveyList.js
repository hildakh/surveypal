import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

  const showDialog = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    // submit the feedback
  }
  return (
    <List className={classes.root} subheader={<li />}>
      <ul className={classes.ul}>
        {props.list.map(item => {
          return (
            <SurveyListItem
              title={item}
              onClick={showDialog}
            >
            </SurveyListItem>
          )
        })}
      </ul>
      <Feedback open={open} close={handleClose} submit={handleSubmit} />
    </List>
  );
}
