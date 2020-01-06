import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Back from "./Back";
import Reset from "./Reset";
import Start from "./Start";
import Resume from "./Resume";

const useStyles = makeStyles(theme => ({
  back: {
    margin: theme.spacing()
  }
  // buttonContainer: {
  //   justify: "space-between",
  //   spacing: 24
  // }
}));

export default function SurveyForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [status, setStatus] = React.useState("BASIC");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeMessage = () => {
    setStatus("BASIC");
  };

  const openSuccess = () => {
    setStatus("SUCCESS");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogActions>
          <Back onClick={handleClose} className={classes.back} />
          <Reset onClick={handleClose} />
        </DialogActions>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter your Email and Password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Resume onClick={handleClose} />
          <Start onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
