import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({

  button: {
    margin: theme.spacing(1),
    background: "#e6af3a",
    borderColor: "black",
    color: "black",
    fontSize: 20,
    fontSize: '1rem',
    borderRadius: 5,
    fontFamily: "Muli",
    float: 'right',
    textTransform: 'none',
  }
}));

export default function StartTop(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={props.onClick}
        variant="outlined"
        className={classes.button}
        endIcon={<ArrowForwardIcon />}
      >
        Start Survey
      </Button>
    </div>
  );
}
