import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ListAltIcon from '@material-ui/icons/ListAlt';

let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
  buttonLabel: {
    fontFamily: "Muli"
  }
}));

export default function BackToSurveyButton(props) {

  const backToSurveyButtonClass = classNames("back-to-survey-button")
  const styleClasses = useStyles();

  return (
    <div className={styleClasses.root}>
      <Fab class={backToSurveyButtonClass, styleClasses.buttonLabel} variant="extended" id="back-to-survey-button" label="go back to view the full survey" onClick={props.onClick} size="large">
        View Full Survey
        <ListAltIcon className={styleClasses.extendedIcon} />
      </Fab>
      {/* <input accept="???" className={classes.input} id="icon-button-next" type="???" /> */}
    </div>
  );
}