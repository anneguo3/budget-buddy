import React from 'react';
import { connect } from 'react-redux';
import PieChartIndex from './pieChartIndex.js';
import { initializeTotals } from '../../../actions/aggregateAction';

class AggregateInfo extends React.Component {
      constructor(props) {
            super(props);
            console.log(this.props);

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
            console.log(this.state)
      }
      
        
      // componentDidUpdate() {
      //       if (this.state.inflow == 0 && this.state.outflow == 0) {
      //             this.props.reducer.transactions.map((item) => {
      //                   console.log(item)
      //                   console.log(typeof item.date)
      //                   if (item.isMoneyIncrease) {
      //                         this.setState((state) => ({
      //                               inflow: Number(state.inflow + item.amount)
      //                         }))
      //                   } else {
      //                         this.setState({
      //                               outflow: this.props.outflow + item.amount
      //                         })

      //                         let outflow = 0
      //                         outflow += item.amount
      //                         // TODO state needs to update properly
      //                         console.log(Number(this.state.outflow + item.amount))
      //                         console.log(+(Number(this.state.outflow) + Number(item.amount)))
      //                         console.log(this.state.outflow)
      //                   }
      //             })
      //       } 
      //       console.log(this.state)
      // }
         
      
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