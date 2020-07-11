import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'January', Expense: 4000, Income: 2400, amt: 2400,
  },
  {
    name: 'February', Expense: 3000, Income: 1398, amt: 2210,
  },
  {
    name: 'March', Expense: 2000, Income: 2800, amt: 2290,
  },
  {
    name: 'April', Expense: 2780, Income: 3908, amt: 2000,
  },
  {
    name: 'May', Expense: 1890, Income: 4800, amt: 2181,
  },
  {
    name: 'June', Expense: 2390, Income: 3800, amt: 2500,
  },
  {
    name: 'July', Expense: 3490, Income: 4300, amt: 2100,
  },
];

export default class TimeLineGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div>
        {/* TODO: Fill with relevant data */}
        <p>Expenses were highest in January and income was highest in May.</p>
        <LineChart
        width={500}
        height={300}
        data={data}
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
