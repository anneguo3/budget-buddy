import React, { Component } from "react";
import AddEntry from "./AddEntry/index";
import EntryList from "./EntryList/index";
import {connect} from 'react-redux'

class Mydata extends Component {
  render() {
    if (!this.props.user){
      this.props.history.push('/')
    }
    return (
      <div>
        <AddEntry />
        <EntryList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user
  };
};

export default connect(mapStateToProps)(Mydata);
