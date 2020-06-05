import React from "react";
import "./EntryList.css"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemSecondaryAction } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import TodayIcon from '@material-ui/icons/Today';


export default class EntryList extends React.Component {
    render() {
        return (
            <div className = "entryList">
                <List component="nav" aria-label = "list of entries">
                    <ListItem button>
                        <IconButton edge="start" aria-label="edit">
                            <TodayIcon/>
                        </IconButton>

                        <ListItemText id="item" primary="Purchased Item" secondary="$10.00"/>
                        

                        <IconButton aria-label="edit">
                            <EditIcon/>
                        </IconButton>

                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                </List>
            </div>
        );   
    }
}