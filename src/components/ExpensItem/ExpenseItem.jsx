import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseItem.module.css';

function ExpenseItem({ expense, onEditExpense, onDeleteExpense }) {
  const handleEdit = () => {
    onEditExpense(expense);
  };

  const handleDelete = () => {
    onDeleteExpense(expense.id);
  };

  return (
    <div className={styles.expenseItem}>
      <div className={styles.expenseDetails}>
        <h4>{expense.title}</h4>
        <p>{new Date(expense.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</p>
      </div>
      <div className={styles.expenseActions}>
        <p>${expense.amount.toFixed(2)}</p>
        <button onClick={handleEdit} className={styles.editButton}>Edit</button>
        <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  onEditExpense: PropTypes.func.isRequired,
  onDeleteExpense: PropTypes.func.isRequired
};

export default ExpenseItem;