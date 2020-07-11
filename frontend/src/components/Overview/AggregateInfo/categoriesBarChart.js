import React from 'react';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Entertainment', Expense: -4000, amt: 2400,
  },
  {
    name: 'Groceries', Expense: -1398, amt: 2210,
  },
  {
    name: 'Restaurants', Expense: -9800, amt: 2290,
  },
  {
    name: 'Housing', Expense: -3908, amt: 2000,
  },
  {
    name: 'Miscellaneous', Expense: -4800, amt: 2181,
  },
  {
    name: 'Chequing', Income: 2390, amt: 2500,
  },
  {
    name: 'Savings', Income: 3490, amt: 2100,
  },
];

class CategoryBars extends React.Component {

  render() {
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

// const mapStateToProps = (state) => {
//       return {
//         reducer: state.reducer,
//         aggregateReducer: state.aggegateReducer,
//       };
// };

export default CategoryBars;
