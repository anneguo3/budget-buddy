import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";

// REFACTOR TODO !!!
const PieChartIndex = (props) => {
  const aggregate = useSelector((state) => state.aggregate);

  const data = [
    { name: "Inflow", value: props.inflow },
    { name: "Outflow", value: props.outflow },
  ];

  const COLORS = ["#b8ffc9", "#ff9999"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <p>You have saved ${props.inflow} and spent ${props.outflow} this month.</p>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
    
  );
}

export default PieChartIndex;
