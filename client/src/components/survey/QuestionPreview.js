import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from '@material-ui/core/Snackbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

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
  }
}));

export default function QuestionPreview() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Card className={classes.card}>
        <span className={classes.card}>"Hey</span>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            "Hilda"
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <span className={classes.card}>"Hey</span>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            "Hilda"
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      {/* <SnackbarContent
        className={classes.snackbar}
        message="I love snacks."
        action={action}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
      />
      <SnackbarContent
        className={classes.snackbar}
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={action}
      /> */}
    </div>
  );
}
