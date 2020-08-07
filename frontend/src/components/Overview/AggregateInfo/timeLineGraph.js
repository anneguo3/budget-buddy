import React from 'react';
import { connect } from "react-redux";
import moment from 'moment';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



class TimeLineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    let monthMap = new Map();

    this.props.reducer.transactions.map((item) => {
      let currMonth = moment(item.date).month();
      if (monthMap.has(currMonth)) {
        let monthVals = monthMap.get(currMonth);
        if (item.isMoneyIncrease) { 
          let currIncome = Number(monthVals[1]) + Number(item.amount); // income in array[1]
          monthVals[1] = currIncome;
          monthMap.set(currMonth, monthVals);
        } else {
          let currExpense = Number(monthVals[0]) + Number(item.amount); // expense in array[0]
          monthVals[0] = currExpense;
          monthMap.set(currMonth, monthVals);
        }

      } else {
        let value = []
        if (item.isMoneyIncrease) {
          value.push(0);
          value.push(item.amount);
          monthMap.set(currMonth, value); // set income
        } else {
          value.push(item.amount);
          value.push(0);
          monthMap.set(currMonth, value); // set expense
        }
      }
    })

    this.data = [];
    for (let i = 0; i < this.months.length; i++) {
      if (monthMap.has(i)) {
        let transactions = monthMap.get(i);
        this.data.push({
          name: this.months[i], Expense: transactions[0], Income: transactions[1]
        })
      }
      
    }
    
    this.state = {
      data: this.data,
    }
  }

  render() {
    return (
      <div>
        <p>Your year at a glance.</p>
        <LineChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Expense" stroke="#ff9999" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Income" stroke="#b8ffc9" />
      </LineChart>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer
  };
};


export default connect(mapStateToProps)(TimeLineGraph);