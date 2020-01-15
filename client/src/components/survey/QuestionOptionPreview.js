import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Typography } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';


// const action = (
//   <Button color="secondary" size="small">
//     lorem ipsum dolorem
//   </Button>
// );

const useStyles = makeStyles(theme => ({
  root: {
    width: "95%",
    position: "relative",
    margin: "0 auto",
    fontFamily: "Muli"
  },
  snackbar: {
    margin: theme.spacing(1),
    textTransform: "none",
    fontFamily: "Muli"
  }
}));

export default function QuestionPreview(props) {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const radioHandleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      {props.question.options.map(item => (
        <Typography align="left">
          {props.question.question.question_type_id === 1 && (
            <Checkbox
              checked={checked}
              onChange={handleChange}
              value="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            ></Checkbox>
          )}

          {props.question.question.question_type_id === 2 && (
              <Radio
              checked={selectedValue === 'a'}
              onChange={radioHandleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
          )}

          {props.question.question.question_type_id === 5 && (
              <TextField id="standard-basic" style={{marginBottom: "3%"}}
              />
          )}

          {item.option_text}
        </Typography>
      ))}
    </div>
  );
}
