import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { connect } from 'react-redux';
import { fade } from "@material-ui/core/styles";
import {logout} from '../../actions/action';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  input: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.9),
    marginRight: 10,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    paddingLeft: "10px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
}));

let ButtonAppBar = ({dispatch}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Budget Buddy
          </Typography>
          <Link to={"/data"} style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">My Data</Button>
          </Link>
          <Link
            to={"/overview"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Overview</Button>
          </Link>
          <IconButton color="inherit">
            <Link to={"/profile"} style={{ textDecoration: "none", color: "white" }}>
              <AccountCircle />
            </Link>
          </IconButton>
          <Button color="inherit" onClick={() => {
            dispatch(logout());
            window.location.replace('/');
            }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar = connect()(ButtonAppBar);

export default ButtonAppBar;
