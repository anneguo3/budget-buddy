import React, { Component } from 'react'
import {Textbox} from './Textbox'
import SummaryPage from './SummaryPage'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <SummaryPage totalInflow={this.props.totalInflow} totalOutflow={this.props.totalOutflow}/>
            </div>
        )
    }
}
