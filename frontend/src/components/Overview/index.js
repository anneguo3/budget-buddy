import React, { Component } from 'react'
import SummaryPage from './SummaryPage'
import { connect } from "react-redux";

class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.user){
            this.props.history.push('/')
        }
        return (
            <div>
                <SummaryPage totalInflow={this.props.aggregateReducer.totalInflow} totalOutflow={this.props.aggregateReducer.totalOutflow}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        aggregateReducer: state.aggregateReducer,
        user: state.reducer.user
    };
};

export default connect(mapStateToProps)(Overview);
