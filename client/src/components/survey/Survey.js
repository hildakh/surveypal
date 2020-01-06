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
  },
  heading: {
    textAlign: "center"
  },

}));

export default function SurveyForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

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
          <h4 className={classes.heading}>Vancouver 2019 Sheltered Survey</h4>
          <p>
            <QuestionPreview />
          </p>
          <footer>
            <Resume />
            <Start />
          </footer>

    </div>
  );
}
