import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './TopExpensesChart.module.css';

function TopExpensesChart({ expenses }) {
  const sortedExpenses = [...expenses]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <div className={styles.chartContainer}>
      <h3>Top 5 Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sortedExpenses}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopExpensesChart;
