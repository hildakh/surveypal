import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#f57c00",
    color: "white",
    fontSize: 15,
    fontFamily: "Dancing Script"
  }
}));

export default function Back() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<ArrowBackIcon />}
      >
        Back to surveys
      </Button>
    </div>
  );
}
