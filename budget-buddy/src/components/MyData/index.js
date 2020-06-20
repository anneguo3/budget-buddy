import React, { Component } from 'react'
import AddMessage from './Add/index'
import {EntryList} from "./EntryList/index";

export default class Mydata extends Component {
    render() {
        return (
            <div>
                <AddMessage/>
                <EntryList/>
            </div>
        )
    }
}
