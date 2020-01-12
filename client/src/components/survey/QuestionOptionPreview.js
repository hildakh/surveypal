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

export default function QuestionPreview(props) {
  const classes = useStyles();
  const options = JSON.parse(localStorage.getItem('token')).options.map( item => {
  item.filter( option => {
    //  console.log(option.question_id)
    //  console.log(props.questionId)
      option.question_id = props.questionId
      // console.log(option)
    })
    // console.log('currentQ', currentQOptions);
    // return currentQOptions;
  });
  console.log('Options', options);

  return (
    <div className={classes.root}>

      <SnackbarContent
        className={classes.snackbar}
        message='Yes'
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
