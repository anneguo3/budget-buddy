import React from 'react';
import { connect } from 'react-redux';
import PieChartIndex from './pieChartIndex.js';
import { initializeTotals } from '../../../actions/aggregateAction';

class AggregateInfo extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
              transactions: this.props.reducer.transactions,
              inflow: this.props.aggregateReducer.totalInflow,
              outflow: this.props.aggregateReducer.totalOutflow
            }
          }
        
          componentDidMount() {
            if (this.state.inflow == 0 && this.state.outflow == 0) {
              this.state.transactions.map((item) => {
                this.props.initializeTotals(item)
              })
            }
        
            this.setState({
              inflow: this.props.aggregateReducer.totalInflow,
              outflow: this.props.aggregateReducer.totalOutflow
            })
          }
      
      render() {                
            const placeholder = <p>You have no data to display.</p>
            const dataExists = (this.props.aggregateReducer.totalInflow !== 0 || this.props.aggregateReducer.totalOutflow !== 0);
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