import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {


  return (
    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Feedback!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use this form to provide feedback.
          </DialogContentText>
          <TextField
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            rows="4"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.submit} color="primary">
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}