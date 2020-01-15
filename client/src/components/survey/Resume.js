import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#8e24aa",
    color: "white",
    fontSize: 20,
    textTransform: 'none',
    fontFamily: 'Muli',
    borderRadius: 5
  }
}));

export default function Resume(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        onClick={props.onClick}
        className={classes.button}
        startIcon={<AutorenewIcon />}
      >
        Resume
      </Button>
    </div>
  );
}
