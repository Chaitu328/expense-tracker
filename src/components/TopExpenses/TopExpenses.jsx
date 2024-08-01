import { useState, useEffect } from "react";
import styles from './TopExpenses.module.css'; // Import the CSS module

// Function to process expenses data
const processExpenses = (expenses) => {
  return expenses.map(expense => ({
    category: expense.category, // Use category instead of name
    value: expense.amount
  }));
};

const TopExpensesBarChart = ({ expenses }) => {
  const [topExpenses, setTopExpenses] = useState([]);

  useEffect(() => {
    // Process expenses and update state
    const data = processExpenses(expenses);
    setTopExpenses(data);
  }, [expenses]); // Depend on `expenses` so it updates when they change

  return (
    <div className={styles.container}>
      <div className={styles.barChartContainer}>
        {topExpenses.map(expense => (
          <div key={expense.category} className={styles.barContainer}>
            <div className={styles.barLabel}>{expense.category}</div>
            <div className={styles.bar} style={{ width: `${expense.value}px` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopExpensesBarChart;
