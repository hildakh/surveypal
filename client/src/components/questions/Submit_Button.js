import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#8e24aa",
    color: "white",
    fontSize: 15,
    fontFamily: "Dancing Script",
    borderRadius: 20
  }
}));

export default function SubmitButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        onClick={props.onClick}
        className={classes.button}
      >
        Submit
      </Button>
    </div>
  );
}
