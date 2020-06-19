import React from "react";
import "./App.css";
import { AddEntry } from "./components/AddEntry/index";
import { EntryList } from "./components/EntryList/index";
import { Textbox } from "./components/Textbox";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <AddEntry />
      <EntryList />
      <Textbox />
    </div>
  );
}

export default App;
