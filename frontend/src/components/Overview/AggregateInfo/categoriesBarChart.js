import React from 'react';
import { connect } from "react-redux";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

import { initExpense, initIncome, resetCategories } from '../../../actions/categoryAction';
import moment from "moment";


class CategoryBars extends React.Component {
  constructor(props) {
    super(props);
    
    this.transactions = [];
    if (props.isMonth) {
      this.props.reducer.transactions.map((item) => {
        if (moment(moment()).isSame(item.date, 'month')) {
          this.transactions.push(item)
        }
      })
    } else {
      this.transactions = this.props.reducer.transactions
    }
    
    // this.props.resetCategories();

    // for (let category of this.props.reducer.expenseCategories) {
    //   this.props.initExpense(category);
    //   console.log(this.props.categoryReducer)
    // }
    // for (let category of this.props.reducer.incomeCategories) {
    //   this.props.initIncome(category);
    // }
    
    let categoryMap = new Map()
    
    this.transactions.map((item) => {
      if (item.isMoneyIncrease) {
        for (let category of this.props.reducer.incomeCategories) {
          if (item.category === category) {
            if (categoryMap.has(category)) {
              categoryMap.set(category, (Number(categoryMap.get(category)) + Number(item.amount)))
            } else {
              categoryMap.set(category, item.amount)
            }
          }
        }
      } else {
        for (let category of this.props.reducer.expenseCategories) {
          if (item.category === category) {
            if (categoryMap.has(category)) {
              categoryMap.set(category, (Number(categoryMap.get(category)) - Number(item.amount)))
            } else {
              categoryMap.set(category, 0 - Number(item.amount))
            }
          }
        }
      }
    })
    this.data = [];
    

    for (let [category, amount] of categoryMap) {
      if (amount < 0) {
        this.data.push({
          name: category, Expense: amount,
        });
      } else {
        this.data.push({
          name: category, Income: amount,
        });
      }
    }

    this.state = {
      data: this.data
    }
  }
  render() {
    let data = this.state.data;
    return (
      <div>
        <p>A quick look at your overall spending and saving categories.</p>
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" width = {400}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Expense" fill="#ff9999" stackId="stack" />
          <Bar dataKey="Income" fill="#b8ffc9" stackId="stack" />
        </BarChart>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
      return {
        reducer: state.reducer,
        categoryReducer: state.categoryReducer
      };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initExpense: (category) => dispatch(initExpense(category)),
    initIncome: (category) => dispatch(initIncome(category)),
    resetCategories: () => dispatch(resetCategories())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryBars);
