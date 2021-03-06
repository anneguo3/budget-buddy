import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { login, fetchUserData } from "../../../actions/action";
import { connect } from "react-redux";
import axios from "axios";
import { history } from "react-router-dom";

const CLIENT_ID =
  "851822540683-n3koid7ih90omslsla3nf9fo9kfig8u5.apps.googleusercontent.com";

class GoogleBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
    };
  }

  login = (response) => {
    if (response.accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
      }));
      let res = response.profileObj;
      axios
        .put(`/users/new`, {
          googleID: res.googleId,
          name: res.name,
          email: res.email,
          image: res.imageUrl,
        })
        .then(() => {
          this.props.login(response.accessToken, res.googleId);
          this.props.getUser(res.googleId);
          setTimeout(this.props.push, 1000);
        });
    }
  };

  logout = (response) => {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  };

  handleLoginFailure = (response) => {
    console.log(response);
    alert("Failed to log in");
  };

  handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login With Google"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, id) => dispatch(login(token, id)),
    getUser: (id) => dispatch(fetchUserData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBtn);
