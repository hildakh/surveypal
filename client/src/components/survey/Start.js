import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#64dd17",
    color: "white",
    fontSize: 15,
    fontFamily: "Dancing Script",
    borderRadius: 20
  }
}));

export default function Start() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<PlayCircleFilledIcon />}
      >
        Start
      </Button>
    </div>
  );
}
