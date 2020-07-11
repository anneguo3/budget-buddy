import React, { Component } from 'react'
import {Textbox} from './Textbox'
import SummaryPage from './SummaryPage'
import combineReducer from '../../reducers/index';
import { connect } from "react-redux";

class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SummaryPage totalInflow={this.props.aggregateReducer.totalInflow} totalOutflow={this.props.aggregateReducer.totalOutflow}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        aggregateReducer: state.aggregateReducer
    };
};

export default connect(mapStateToProps)(Overview);
