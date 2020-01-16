import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListAltIcon from '@material-ui/icons/ListAlt';

let classNames = require("classnames");

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#f9fbe7",
    borderColor: "black",
    color: "black",
    fontSize: 20,
    fontSize: '1rem',
    borderRadius: 5,
    fontFamily: "Muli",
    float: 'center',
    textTransform: 'none',
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

export default function BackToSurveyButton(props) {

  const styleClasses = useStyles();

  return (
    <div >
      <Button 
        className={styleClasses.button} 
        variant="outlined" 
        id="back-to-survey-button" 
        label="go back to view the full survey" 
        onClick={props.onClick} 
        size="large"
      >
        <ListAltIcon  className={styleClasses.icon}/>
        View Full Survey
      </Button>
      {/* <input accept="???" className={classes.input} id="icon-button-next" type="???" /> */}
    </div>
  );
}