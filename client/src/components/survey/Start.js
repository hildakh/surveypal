import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

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
  textTransform: 'none',
  }
}));

export default function Start(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        onClick={props.onClick}
        className={classes.button}
        startIcon={<PlayCircleFilledIcon />}
      >
        Start
      </Button>
    </div>
  );
}
