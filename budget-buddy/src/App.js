import React from "react";
import "./App.css";
import AddMessage from "./components/Add/index";
import {EntryList} from "./components/EntryList/index";
import Textbox from "./components/Textbox";

function App() {
  return (
    <div>
      <AddMessage />
      <EntryList/>
      <Textbox/>
    </div>
    
    );
}

export default App;
