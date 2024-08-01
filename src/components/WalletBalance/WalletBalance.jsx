import React, { useState } from 'react';
import styles from './WalletBalance.module.css';

function WalletBalance({ balance, onAddIncome }) {
  const [showDialog, setShowDialog] = useState(false);
  const [inputAmount, setInputAmount] = useState('');

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleAddIncome = () => {
    onAddIncome(parseInt(inputAmount, 10));
    setShowDialog(false);
    setInputAmount('');
  };

  return (
    <div className={styles.walletBalance}>
      <h3 className={styles.balanceText}>
        Wallet Balance: 
        <span className={styles.balanceAmount}> ₹{balance}</span>
      </h3>
      <button className={styles.addIncomeButton} onClick={openDialog}>
        + Add Income
      </button>

      {showDialog && (
        <div className={styles.backdrop}>
          <div className={styles.dialog}>
            <input
              type="number"
              placeholder="Enter Amount"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <div>
              <button className={styles.addButton} onClick={handleAddIncome}>
                Add Balance
              </button>
              <button className={styles.cancelButton} onClick={closeDialog}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletBalance;
