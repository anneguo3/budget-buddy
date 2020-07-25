import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GoogleBtn from './GoogleBtn';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SignInBar from './SignInBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function CenteredGrid(props) {

  const goOverview = function() {
    props.history.push('/data');
  }

  const classes = useStyles();

  return (
    <div className="signInPage">
    <SignInBar/>
    <div class='main-text-box'>
      <h1>Your all-in-one budget analyzer</h1>
      <GoogleBtn push={() => goOverview()}></GoogleBtn>
    </div>
    </div>
  );
}



