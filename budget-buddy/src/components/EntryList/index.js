import React from "react";
import { useSelector } from "react-redux";
import "./EntryList.css";
import List from "@material-ui/core/List";
import MoneyItem from "./../MoneyItem/index.js";

export function EntryList() {
  const listMaster = useSelector((state) => state.list);
  const listComp = <MoneyItem entry={listMaster} />;
  return (
    <div className="entryList">
      <List component="nav" aria-label="list of entries">
        {listComp}
      </List>
    </div>
  );
}
