import React, { Component } from "react";
import { AddEntry } from "./AddEntry/index";
import { EntryList } from "./EntryList/index";

export default class Mydata extends Component {
  render() {
    return (
      <div>
        <AddEntry />
        <EntryList />
      </div>
    );
  }
}
