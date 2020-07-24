import React from 'react';
import { connect } from 'react-redux';
import PieChartIndex from './pieChartIndex.js';

class AggregateInfo extends React.Component {
      constructor(props) {
            super(props)           
      }
      
      render() {                
            const placeholder = <p>You have no data to display.</p>
            const dataExists = (this.props.aggregateReducer.totalInflow !== 0 || this.props.aggregateReducer.totalOutflow !== 0);
            let display = dataExists ? 
                  <PieChartIndex inflow={this.props.aggregateReducer.totalInflow} 
                        outflow={this.props.aggregateReducer.totalOutflow}/>
                  : placeholder;

            return(
                  <div className="aggregateInfo">
                        {display}
                  </div>
            )
      } 
}

const mapStateToProps = (state) => {
      return { 
          aggregateReducer: state.aggregateReducer
      };
  };
  
  export default connect(mapStateToProps)(AggregateInfo);