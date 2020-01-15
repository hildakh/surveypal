import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({

  button: {
    margin: theme.spacing(1),
    background: "#849e00",
    borderColor: "white",
    color: "white",
    fontSize: 20,
    fontSize: '1rem',
    borderRadius: 5,
    fontFamily: "Muli",
    float: 'left',
    textTransform: 'none',
  }
}));

export default function Back(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={props.onClick}
        variant="outlined"
        className={classes.button}
        startIcon={<ArrowBackIcon />}
      >
        Back to surveys
      </Button>
    </div>
  );
}
