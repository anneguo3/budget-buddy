import React from 'react';
import { connect } from "react-redux";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

import { addToCat } from '../../../actions/categoryAction';
import categoryReducer from '../../../reducers/categoryReducer';



class CategoryBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalChequing: 0,
      totalSavings: 0,
      totalEntertainment: 0,
      totalGroceries: 0,
      totalRestaurants: 0,
      totalHousing: 0,
      totalMiscellaneous: 0,
    }
  }

  componentDidMount() {
    this.props.reducer.transactions.map((item) => {
      switch (item.category) {
        case 'Chequing':
          this.setState({
            totalChequing: this.state.totalChequing + Number(item.amount)
          });
        case 'Savings':
          this.setState({
            totalSavings: this.state.totalSavings + Number(item.amount)
          });
        case "Entertainment":
          this.setState({
            totalEntertainment: this.state.totalEntertainment - Number(item.amount)
          });
        case "Groceries":
          this.setState({
            totalGroceries: this.state.totalGroceries - Number(item.amount)
          });
        case "Restaurants":
          this.setState({
            totalRestaurants: this.state.totalRestaurants - Number(item.amount)
          });
        case "Housing":
          this.setState({
            totalHousing: this.state.totalHousing - Number(item.amount)
          });
        case "Miscellaneous":
          this.setState({
            totalMiscellaneous: this.state.totalMiscellaneous - Number(item.amount)
          });
      }
    })
  }
  
  render() {
    let data = [
      {
        name: 'Entertainment', Expense: this.state.totalEntertainment, amt: 2400,
      },
      {
        name: 'Groceries', Expense: this.state.totalGroceries, amt: 2210,
      },
      {
        name: 'Restaurants', Expense: this.state.totalRestaurants, amt: 2290,
      },
      {
        name: 'Housing', Expense: this.state.totalHousing, amt: 2000,
      },
      {
        name: 'Miscellaneous', Expense: this.state.totalMiscellaneous, amt: 2181,
      },
      {
        name: 'Chequing', Income: this.state.totalChequing, amt: 2500,
      },
      {
        name: 'Savings', Income: this.state.totalSavings, amt: 2100,
      },
    ];
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
    addToCat: (item) => dispatch(addToCat(item)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryBars);
