import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Back from "./Back";
// import Reset from "./Reset";
import Start from "./Start";
// import Resume from "./Resume";
import QuestionPreview from "./QuestionPreview";

const useStyles = makeStyles(theme => ({
  surveyview: {
    marginTop: '3%',
    marginBottom: '3%',
    width: "90%",
    backgroundColor: "#849e00",
    margin: "0 auto",
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    borderRadius: 15,
    fontFamily: 'Muli',
  },
  heading: {
    textAlign: "center",
    fontFamily: 'Muli',
    color: 'white',
    marginRight: '12%'
  }

}));

export default function SurveyForm(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  const title = JSON.parse(localStorage.getItem('token')).surveys[0].name;

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <div className={classes.surveyview}>
      <Back onClick={props.closePreview} />
      {/* <Reset /> */}
      <h4 className={classes.heading}>{title}</h4>
      <QuestionPreview />
      {/* <Resume /> */}
      <Start onClick={props.startSurvey} />
    </div>
  );
}
