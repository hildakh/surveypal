import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from '@material-ui/core/Snackbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import QuestionOptionPreview from './QuestionOptionPreview';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const questions = [];
const useStyles = makeStyles(theme => ({
  root: {
    width: "95%",
    position: "relative",
    margin: "0 auto"
  },
  card: {
    margin: theme.spacing(3),
    borderRadius: 10,
    backgroundColor: '#424242',
    color: 'white'
  },
  title: {
    color: 'white'
  }
}));

export default function QuestionPreview() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Have you already answered a survey today (with someone wearing a yellow sticker)?
          </Typography>
        </CardContent>
        <CardActions>
          <QuestionOptionPreview />
        </CardActions>
      </Card>
      {/* <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Do you currently have a place to stay where you pay monthly rent?
          </Typography>
        </CardContent>
        <CardActions>
          <QuestionOptionPreview />
        </CardActions>
      </Card> */}
    </div>
  );
}
