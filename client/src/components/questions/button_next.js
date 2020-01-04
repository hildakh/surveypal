import React from "react";
// import { makeStyles } from '@material-ui/core/styles';

import { IconButton, CssBaseline } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import { useSwipeable, Swipeable } from 'react-swipeable';

let classNames = require("classnames");

export default function NextButton(props) {

  const nextButtonClass = classNames("next-button")

  return (
    <React.Fragment>
      <IconButton class={nextButtonClass} id="next-question-button" label="go to next question" onClick={props.onClick}>
        <NavigateNextIcon />
      </IconButton>
    </React.Fragment>
  );
}