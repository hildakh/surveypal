import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const useStyles = makeStyles(theme => ({
  root: {
    width: "95%",
    position: "relative",
    margin: "0 auto"
  },
  snackbar: {
    margin: theme.spacing(1)
  }
}));

export default function QuestionPreview() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent
        className={classes.snackbar}
        message="Yes"
        action={action}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          "No"
        }
      />
      <SnackbarContent
        className={classes.snackbar}
        message="I don/'t know"
        action={action}
      />
    </div>
  );
}
