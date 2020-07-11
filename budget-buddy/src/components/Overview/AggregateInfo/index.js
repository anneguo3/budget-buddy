import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import aggregateReducer from '../../../reducers/aggregateReducer';
import PieChartIndex from './pieChartIndex.js';

class AggregateInfo extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  inflow: 0,
                  outflow: 0
            };

            aggregateReducer.subscribe(() => {
                  this.setState({
                        inflow: aggregateReducer.getState().totalInflow,
                        outflow: aggregateReducer.getState().totalOutflow
                  })
            })            
      }
      
      render() {                
            const placeholder = <p>You have no data to display.</p>
            console.log("in" + this.state.inflow)
            console.log( "out" + this.state.outflow)
            const dataExists = (this.state.inflow !== 0 || this.state.outflow !== 0);
            let display = dataExists ? <PieChartIndex inflow={this.state.inflow} outflow={this.state.outflow}/> : placeholder;

            return(
                  <div className="aggregateInfo">
                        {display}
                  </div>
            )
      } 
}
export default AggregateInfo;