import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Error from "../status/Error";
import axios from "axios";
import fetchSurveys from "../../helpers/fetchSurveys";
import fetchSurveyors from "../../helpers/fetchSurveyors";
import fetchTeams from "../../helpers/fetchTeams";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    borderColor: 'white',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: 20,
    borderRadius: 5,
    textTransform: "none",
    fontFamily: "Muli"
  },
  dialogue: {
    textTransform: "none",
    fontFamily: "Muli",
  }
}));

export default function FormDialog(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    email: "",
    password: "",
    status: "PENDING",
    open: false
  });

  const fetchData = (email, password) => {
    const token = {};
    axios
      .post("/api/login", { email: email, password: password })
      .then(response => {
        // handle success
        if (!response.data.user) {
          setState({ ...state, status: "ERROR" });
        } else {
          token["user"] = response.data.user;
          fetchSurveys(response.data.user)
            .then(data => {
              token["surveys"] = data.surveys;
              token["questions"] = data.questions;
              if (token.user.user_type_id === 1) {
                fetchSurveyors()
                .then(data => {
                  token["surveyors"] = data.surveyors;
                  fetchTeams().then(data => {
                    token["teams"] = data.teams;
                  });
                });
              }
              localStorage.setItem("token", JSON.stringify(token));
              props.login();
              handleClose();
          });
        }
      });
  };
  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false, status: "PENDING" });
  };
  const validate = () => {
    fetchData(state.email, state.password);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="default"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        open={state.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"

      >
        <DialogTitle id="form-dialog-title" className={classes.dialogue}>Login</DialogTitle>
        {state.status === "ERROR" && (
          <div>
            <Error message="Email or password is incorrect!" />
          </div>
        )}
        <DialogContent>
          <DialogContentText className={classes.dialogue}>
            Please Enter your Email and Password.
          </DialogContentText>
          <TextField
            className={classes.dialogue}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          <TextField
            className={classes.dialogue}
            margin="none"
            id="dense"
            label="Password"
            type="password"
            fullWidth
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className={classes.dialogue}>
            Cancel
          </Button>
          <Button onClick={validate} color="primary" className={classes.dialogue}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
