import React, { Component } from "react";
import Alert from "@material-ui/lab/Alert";

export default class Error extends Component {
  render() {
    return (
      <div>
        <Alert severity="error">{this.props.errormessage}</Alert>
      </div>
    );
  }
}
