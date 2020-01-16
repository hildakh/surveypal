import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Back from "./Back";
// import Reset from "./Reset";
import Start from "./Start";
// import Resume from "./Resume";
import QuestionPreview from "./QuestionPreview";
import useSurveyData from '../../hooks/useSurveyData';
import StartTop from "./StartTop";


const useStyles = makeStyles(theme => ({
  surveyview: {
    marginTop: '3%',
    marginBottom: '3%',
    width: "90%",
    backgroundColor: "#e6af3a",
    margin: "0 auto",
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    borderRadius: 15,
    fontFamily: 'Muli',
  },
  heading: {
    textAlign: "center",
    fontFamily: 'Muli',
    color: 'black',
    marginRight: '12%'
  }

}));

export default function SurveyForm(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  const title = JSON.parse(localStorage.getItem('token')).surveys[0].name;

  //SurveyContext is the survey state context from the useSurveyData hook
  const {
    SurveyContext
  } = useSurveyData();
  //surveyState is the useContext hook that gives you access to the current survey state
  // use it to access the following:
  // current_options (array of option objects for the current question)
  // current_question (question object, same as in local storage, with key questions that contains all question objects from local storage)
  // current_survey (the current survey object from local storage)
  // checked (array of options checked on curremt question - this is only relevant when on the question so won't have a value here)
  // example: surveyState.current_question will give you the question that the user is on (change on question nav < >)
  const surveyState = useContext(SurveyContext);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <div className={classes.surveyview} >
      <Back onClick={props.closePreview} />
      <StartTop onClick={props.startSurvey} />
      {/* <Reset /> */}
      <h4 className={classes.heading}>{title}</h4>
      <QuestionPreview />
      <Start onClick={props.startSurvey} />
      {/* <Resume /> */}
    </div>
  );
}
