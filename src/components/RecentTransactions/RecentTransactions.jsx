import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from '../ExpensItem/ExpenseItem';
import styles from './RecentTransactions.module.css';

function RecentTransactions({ expenses, onEditExpense, onDeleteExpense }) {
  return (
    <div className={styles.recentTransactions}>
      
      {expenses.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onEditExpense={onEditExpense}
            onDeleteExpense={onDeleteExpense}
          />
        ))
      )}
    </div>
  );
}

RecentTransactions.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired,
  onEditExpense: PropTypes.func.isRequired,
  onDeleteExpense: PropTypes.func.isRequired
};

export default RecentTransactions;
