import React from 'react';
import { connect } from 'react-redux';
import PieChartIndex from './monthPieChart.js';
import { initializeTotals } from '../../../actions/aggregateAction';

class MonthAggregateInfo extends React.Component {
      state = {
            inflow: 0,
            outflow: 0
      }
        
      componentDidMount() {
            if (this.state.inflow == 0 && this.state.outflow == 0) {
                  this.props.reducer.transactions.map((item) => {
                        console.log(item)
                        console.log(typeof item.date)
                        if (item.isMoneyIncrease) {
                              this.setState((state) => ({
                                    inflow: Number(state.inflow) + Number(item.amount)
                              }))
                        } else {
                              this.setState((state) => ({
                                    outflow: Number(state.outflow) + Number(item.amount)
                              }))
                              // TODO state needs to update properly
                              console.log(Number(this.state.outflow + item.amount))
                              console.log((Number(this.state.outflow) + Number(item.amount)))
                              console.log(this.state.outflow)
                        }
                  })
            } 
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
  
export default connect(mapStateToProps, mapDispatchToProps)(MonthAggregateInfo);