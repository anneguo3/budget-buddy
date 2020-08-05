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

            this.saveOver = false;
            this.saveDiff = 0;
            if (typeof this.props.user.saveGoal === Number) {
                  this.saveOver = this.props.user.saveGoal > this.in
                  this.saveDiff = Math.abs(this.props.user.saveGoal - this.in)
            }

            this.spendOver = false;
            this.spendDiff = 0;
            if (typeof this.props.user.spendGoal === Number) {
                  this.spendOver = this.props.user.spendGoal > this.out
                  this.spendDiff = Math.abs(this.props.user.spendGoal - this.out)
            }

            this.state = {
                  inflow: this.in,
                  outflow: this.out,
                  saveOver: this.saveOver,
                  saveDiff: this.saveDiff,
                  spendOver: this.spendOver,
                  spendDiff: this.spendDiff
            };
            
      }         
      
      render() {                
            const placeholder = <p>You have no data to display.</p>
            const dataExists = (this.state.inflow !== 0 || this.state.outflow !== 0);

            let isSaveOver = (this.saveOver) ? 
                  <p>
                        You are over your savings goal of ${this.props.user.saveGoal} by ${this.state.saveDiff}!
                  </p> 
                  : 
                  <p>
                        You are under your savings goal of ${this.props.user.saveGoal} by ${this.state.saveDiff}!
                  </p>
            let save = (typeof this.props.user.saveGoal !== undefined && typeof this.props.user.saveGoal !== null) ? {isSaveOver} : null

            let isSpendOver = (this.spendOver) ? 
            <p>
                  You are over your spending goal of ${this.props.user.spendGoal} by ${this.state.spendDiff}!
            </p> 
            : 
            <p>
                  You are under your spending goal of ${this.props.user.spendGoal} by ${this.state.spendDiff}!
            </p>
            let spend = (typeof this.props.user.spendGoal !== undefined && typeof this.props.user.spendGoal !== null) ? {isSpendOver} : null


            let data = 
                  <div>
                        <div>
                              <p>
                                    You have saved ${Number(this.state.inflow).toFixed(2)} and spent ${Number(this.state.outflow).toFixed(2)} this month.
                              </p>
                              {save}
                              {spend}
                        </div>
                        
                        <PieChartIndex inflow={this.state.inflow} outflow={this.state.outflow}/>
                  </div>

            let display = dataExists ? data : placeholder;

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
        user: state.reducer.user
      };
    };
    
    const mapDispatchToProps = (dispatch) => {
      return {
        initializeTotals: (item) => dispatch(initializeTotals(item)),
      };
    };
  
export default connect(mapStateToProps, mapDispatchToProps)(AggregateInfo);