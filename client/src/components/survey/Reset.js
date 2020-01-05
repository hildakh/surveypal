import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import AutorenewIcon from "@material-ui/icons/Autorenew";
import { FaGhost } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#9a0007",
    color: "white",
    fontSize: 15,
    fontFamily: 'Dancing Script'
  }
}));

export default function Reset() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<FaGhost />}
      >
        Reset
      </Button>
    </div>
  );
}
