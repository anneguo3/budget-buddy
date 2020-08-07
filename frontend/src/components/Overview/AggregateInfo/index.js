import React from 'react';
import { connect } from 'react-redux';
import PieChartIndex from './pieChartIndex.js';
import { initializeTotals } from '../../../actions/aggregateAction';
import GoalInfo from './goalInfo';
import moment from "moment";

class AggregateInfo extends React.Component {
      constructor(props) {
            super(props);

            this.in = 0;
            this.out = 0;
            
            this.props.reducer.transactions.map((item) => {
                  if (props.isMonth) {
                        if (moment(moment()).isSame(item.date, 'month')) {
                              if (item.isMoneyIncrease) {
                                    this.in = Number(this.in) + Number(item.amount)
                              } else {
                                    this.out = Number(this.out) + Number(item.amount)
                              }  
                        }                      
                  } else {
                        if (item.isMoneyIncrease) {
                              this.in = Number(this.in) + Number(item.amount)
                        } else {
                              this.out = Number(this.out) + Number(item.amount)
                        }
                  }
            })

            this.saveExists = (this.props.user.saveGoal !== undefined && this.props.user.saveGoal !== null 
                  && this.props.user.saveGoal !== -999)
            this.saveOver = false;
            this.saveDiff = 0;
            if (this.saveExists) {
                  this.saveOver = this.props.user.saveGoal < this.in
                  this.saveDiff = Math.abs(this.props.user.saveGoal - this.in)
            }

            this.spendExists = (this.props.user.spendGoal !== undefined && this.props.user.spendGoal !== null 
                  && this.props.user.spendGoal !== -999)
            this.spendOver = false;
            this.spendDiff = 0;
            if (this.spendExists) {
                  this.spendOver = this.props.user.spendGoal < this.out
                  this.spendDiff = Math.abs(this.props.user.spendGoal - this.out)
            }
            
            this.state = {
                  inflow: this.in,
                  outflow: this.out,
                  saveExists: this.saveExists,
                  saveOver: this.saveOver,
                  saveDiff: this.saveDiff,
                  spendExists: this.spendExists,
                  spendOver: this.spendOver,
                  spendDiff: this.spendDiff,
                  isMonth: props.isMonth
            };
            
      }         
      
      render() {                 
            let monthOrYear = (this.state.isMonth) ? "month" : "year";

            let displaySaveGoal = (this.state.saveExists && this.state.isMonth) 
                  ? <GoalInfo goal={this.props.user.saveGoal} isSave={true} isOver={this.state.saveOver} diff={this.state.saveDiff}/>
                  : null      
            let displaySpendGoal = (this.state.spendExists && this.state.isMonth) 
                  ? <GoalInfo goal = {this.props.user.spendGoal} isSave = {false} isOver = {this.state.spendOver} diff = {this.state.spendDiff}/>
                  : null

            let data = 
                  <div>
                        <div>
                              <p>
                                    You have saved ${Number(this.state.inflow).toFixed(2)} and spent ${Number(this.state.outflow).toFixed(2)} this {monthOrYear}.
                              </p>
                              {displaySaveGoal}
                              {displaySpendGoal}
                        </div>
                        
                        <PieChartIndex inflow={this.state.inflow} outflow={this.state.outflow}/>
                  </div>

            return(
                  <div className="aggregateInfo">
                        {data}
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