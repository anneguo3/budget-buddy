import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList } from './reducer';
import "./EntryList.css"
import List from '@material-ui/core/List';
import SimpleList from './../SimpleList/index.js';



export function EntryList() {
    
    const listMaster = useSelector(selectList);
    //const dispatch = useDispatch(); // For future steps
    //const [addItem, setAddItem] = useState(''); // For future steps
    const listComp = <SimpleList listProp={listMaster}/>
    return (
        <div className = "entryList">
            <List component="nav" aria-label = "list of entries">
                {listComp}
            </List>
        </div>
    );   
}