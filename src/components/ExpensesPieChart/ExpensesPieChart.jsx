import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import styles from './ExpensesPieChart.module.css';

function ExpensesPieChart({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
  const data = expenses.map(expense => ({
    name: expense.title,
    value: expense.amount,
    percentage: ((expense.amount / total) * 100).toFixed(1) // Calculate percentage
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className={styles.pieChartContainer}>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
            const radius = innerRadius + (outerRadius - innerRadius) / 2;
            const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
            const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
            return (
              <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize="12px"
                fontFamily="Arial, sans-serif"
              >
                {`${data.find(d => d.name === name)?.percentage}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default ExpensesPieChart;
