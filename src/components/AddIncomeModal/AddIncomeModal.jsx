import React, { useState } from 'react';
import styles from './AddIncomeModal.module.css';

function AddIncomeModal({ onAddIncome }) {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncome(parseFloat(amount));
    setShow(false);
    setAmount(0);
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.openButton} onClick={() => setShow(true)}>
        + Add Income
      </button>
      {show && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Add Income</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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

export default AddIncomeModal;
