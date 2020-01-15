import React from "react";

import { IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

let classNames = require("classnames");

export default function NextButton(props) {

  const nextButtonClass = classNames("next-button")

  return (
    <React.Fragment>
      <IconButton className={nextButtonClass} id="next-question-button" label="go to next question" onClick={props.onClick}>
        <NavigateNextIcon />
      </IconButton>
    </React.Fragment>
  );
}