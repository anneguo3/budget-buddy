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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="signInPage">
    <SignInBar/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6} >
            <img src="https://blogs.sas.com/content/sascom/files/2014/12/94802938.jpg"></img>
        </Grid>
        <Grid item xs={6}>
            <form>
                <h2>Sign Up Today!</h2>
                    <TextField
                            id="outlined-margin-none"
                            label="First Name"
                            style={{ margin: 8, width: "45%", marginBottom: 20}}
                            placeholder="First Name"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                    <TextField
                            id="outlined-margin-none"
                            label="Last Name"
                            style={{ margin: 8, width: "45%", marginBottom: 20}}
                            placeholder="Last Name"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    <TextField
                        id="outlined-margin-none"
                        label="E-mail"
                        style={{ margin: 8, width: "92%", marginBottom: 20}}
                        placeholder="Email"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-margin-none"
                        type="password"
                        label="Password"
                        style={{ margin: 8, width: "92%", marginBottom: 20}}
                        placeholder="Password"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        align="righ"
                    />
                    <Button variant="contained" color="primary"
                    style={{ margin: 8}}>
                        Sign Up
                    </Button>
            </form>
            <GoogleBtn/>
        </Grid>
      </Grid>
    </div>
  );
}



