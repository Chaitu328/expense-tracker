import React, { useState } from 'react';
import styles from './AddExpenseModal.module.css';

function AddExpenseModal({ onAddExpense }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    onAddExpense(newExpense);
    setShow(false);
    setTitle('');
    setAmount(0);
    setCategory('');
    setDate('');
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.openButton} onClick={() => setShow(true)}>
        + Add Expense
      </button>
      {show && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Add
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddExpenseModal;
