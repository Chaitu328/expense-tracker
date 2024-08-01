import React from "react";
import styles from './section.module.css';
import WalletBalance from "../WalletBalance/WalletBalance";
import Expenses from "../Expenses/Expenses"
import ExpensesPieChart from "../ExpensesPieChart/ExpensesPieChart";

function Section({ balance, onAddIncome, expenses, onAddExpense, onEditExpense, onDeleteExpense }) {
  return (
    <div className={styles.rectangleBox}>
      <WalletBalance balance={balance} onAddIncome={onAddIncome} />
      <div className={styles.expensesContainer}>
        <Expenses
          expenses={expenses}
          onAddExpense={onAddExpense}
          onEditExpense={onEditExpense}
          onDeleteExpense={onDeleteExpense}
        />
      </div>
      <div className={styles.pieChartContainer}>
        <ExpensesPieChart expenses={expenses} />
      </div>
    </div>
  );
}

export default Section;