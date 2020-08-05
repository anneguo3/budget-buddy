import React from 'react';
import { connect } from 'react-redux';
import PieChartIndex from './pieChartIndex.js';
import { initializeTotals } from '../../../actions/aggregateAction';

class AggregateInfo extends React.Component {
      constructor(props) {
            super(props);

            this.in = 0;
            this.out = 0;
            this.props.reducer.transactions.map((item) => {
                  if (item.isMoneyIncrease) {
                        this.in = Number(this.in) + Number(item.amount)
                  } else {
                        this.out = Number(this.out) + Number(item.amount)
                  }
            })

            this.state = {
                  inflow: this.in,
                  outflow: this.out
            };
      }         
      
      render() {                
            const placeholder = <p>You have no data to display.</p>
            const dataExists = (this.state.inflow !== 0 || this.state.outflow !== 0);
            let display = dataExists ? 
                  <PieChartIndex inflow={this.state.inflow} 
                        outflow={this.state.outflow}/>
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
        reducer: state.reducer,
        aggregateReducer: state.aggregateReducer,
      };
    };
    
    const mapDispatchToProps = (dispatch) => {
      return {
        initializeTotals: (item) => dispatch(initializeTotals(item)),
      };
    };
  
export default connect(mapStateToProps, mapDispatchToProps)(AggregateInfo);