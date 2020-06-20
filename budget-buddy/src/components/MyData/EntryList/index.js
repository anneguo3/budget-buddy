import React from "react";
import List from "@material-ui/core/List";
import "../EntryList/EntryList.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../app/listReducer";

export function EntryList() {
  const list = useSelector((state) => state.list);

  const colorDecide = (flagInc) => {
    if (flagInc) {
      return "rgb(184, 255, 201)";
    } else {
      return "rgb(255, 153, 153)";
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="entryList">
      <List component="nav" aria-label="list of entries">
        <div>
          {list.value.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: `${colorDecide(item.isMoneyIncrease)}`,
              }}
            >
              <ListItem button>
                <Typography id="date" variant="body1">
                  {item.date}
                </Typography>

                <ListItemText
                  id="item"
                  primary={item.name}
                  secondary={`$ ${item.amount}`}
                />
                <IconButton
                  value={item}
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(deleteItem(item))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </div>
          ))}
        </div>
      </List>
    </div>
  );
}

export default EntryList;
