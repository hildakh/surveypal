import React from "react";
// import { makeStyles } from '@material-ui/core/styles';

import { IconButton} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useSwipeable, Swipeable } from 'react-swipeable';

let classNames = require("classnames");

export default function BeforeButton(props) {

  const beforeButtonClass = classNames("before-button")

  return (
    <div>
      <IconButton class={beforeButtonClass} id="previous-question-button" label="go to previous question" onClick={props.onClick}>
        <NavigateBeforeIcon />
      </IconButton>
      {/* <input accept="???" className={classes.input} id="icon-button-next" type="???" /> */}
    </div>
  );
}