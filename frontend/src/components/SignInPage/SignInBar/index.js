
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import { fade} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  input: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.9),
    marginRight: 10,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    paddingLeft: '10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
      return (
        <div className={classes.root}>
          <AppBar position="absolute">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Budget Buddy
              </Typography>
            <div className={classes.input}>
            <InputBase
              placeholder="Username"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.input}>
            <InputBase
              type="password"
              placeholder="Password"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Link to={'/data'} style={{ textDecoration: 'none', color: "white"}}><Button color="inherit">Login</Button></Link>
            </Toolbar>
          </AppBar>
          </div>
      );
}