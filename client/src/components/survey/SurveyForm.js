import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Back from "./Back";
import Reset from "./Reset";
import Start from "./Start";
import Resume from "./Resume";
import QuestionPreview from "./QuestionPreview";

const useStyles = makeStyles(theme => ({
  surveyview: {
    width: "97%",
    backgroundColor: "#e6ceff",
    margin: "0 auto",
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    borderRadius: 15
  },
  heading: {
    textAlign: "center"
  }

}));

export default function SurveyForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const title = JSON.parse(localStorage.getItem('token')).surveys[0].name;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.surveyview}>
      <Back onClick={handleClose} />
      <Reset onClick={handleClose} />
      <h4 className={classes.heading}>{title}</h4>
      <QuestionPreview />
      <Resume />
      <Start />
    </div>
  );
}
