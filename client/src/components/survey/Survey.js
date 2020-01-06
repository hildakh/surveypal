import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Back from "./Back";
import Reset from "./Reset";
import Start from "./Start";
import Resume from "./Resume";
import Modal from "@material-ui/core/Modal";
import QuestionPreview from "./QuestionPreview";

const useStyles = makeStyles(theme => ({
  modal: {
    width: "97%",
    backgroundColor: "#e6ceff",
    position: "absolute",
    margin: "0 auto",
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll"
  },
  heading: {
    textAlign: "center"
  }
}));

export default function SurveyForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.modal}
      >
        <div>
          <span>
            <Back onClick={handleClose} />
            <Reset onClick={handleClose} />
          </span>
          <h4 className={classes.heading}>Vancouver 2019 Sheltered Survey</h4>
          <p>
            <QuestionPreview />
          </p>
          <footer>
            <Resume />
            <Start />
          </footer>
        </div>
      </Modal>
    </div>
  );
}
