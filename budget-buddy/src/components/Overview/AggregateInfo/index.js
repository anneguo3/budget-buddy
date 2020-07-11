import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PieChartIndex from './pieChartIndex.js';

class AggregateInfo extends React.Component {
      
      render() {                
            const placeholder = <p>You have no data to display.</p>
            console.log("in" + this.props.inflow)
            console.log( "out" + this.props.outflow)
            const dataExists = (this.props.inflow !== 0 || this.props.outflow !== 0);
            let display = dataExists ? <PieChartIndex inflow={this.props.inflow} outflow={this.props.outflow}/> : placeholder;

            return(
                  <div className="aggregateInfo">
                        {display}
                  </div>
            )
      } 
}

AggregateInfo.propTypes = {
      inflow: PropTypes.number.isRequired,
      ouflow: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
      return {
            inflow: state.totalInflow,
            outflow: state.totalOutflow
      }
}

export default connect(mapStateToProps)(AggregateInfo);