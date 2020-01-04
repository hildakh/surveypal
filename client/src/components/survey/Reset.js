import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: '#7f0000',
    color: 'white',
  }
}));

export default function Reset() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<AutorenewIcon />}
      >
        Reset
      </Button>
    </div>
  );
}
