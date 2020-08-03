import React from "react";

import { CircularProgress } from '@material-ui/core';


export default class SpinnerPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{textAlign:'center', margin:'auto', width:'100%', padding:'20px'}}>
                <CircularProgress size={100} />
            </div>
        )
    }
}
