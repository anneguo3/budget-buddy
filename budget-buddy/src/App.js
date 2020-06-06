import React from "react";
import "./App.css";
import AddMessage from "./components/Add/index";
import EntryList from "./components/EntryList/index";
import Textbox from "./components/Textbox";
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <AddMessage />
      <EntryList/>
      <Textbox/>
    </div>
    
    );
}

export default App;
