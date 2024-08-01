import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa'; // Example: Using Font Awesome icon
import styles from './Expenses.module.css'; // Ensure you have styles defined

Modal.setAppElement('#root');

function Expenses({ expenses, onAddExpense, onEditExpense, onDeleteExpense }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddExpense = () => {
    if (title && amount && category && date) {
      const newExpense = {
        id: new Date().toISOString(),
        title,
        amount: parseFloat(amount),
        category,
        date
      };
      
      onAddExpense(newExpense);
      setShowModal(false);
      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className={styles.expenses}>
      <h3 className={styles.expensesHeader}>Expenses</h3>
      <button className={styles.addExpenseButton} onClick={openModal}>
        <FaPlus /> Add Expense
      </button>

    
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2>Add Expense</h2>
        <div className={styles.modalBody}>
          <div className={styles.inputGroup}>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="housing">Housing</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.addButton} onClick={handleAddExpense}>
              Add Expense
            </button>
            <button className={styles.cancelButton} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Expenses;
