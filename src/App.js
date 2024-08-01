import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Section from './components/section/section';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import TopExpensesBarChart from './components/TopExpenses/TopExpenses';

function App() {
  const initialWalletBalance = parseFloat(localStorage.getItem('walletBalance')) || 5000;
  const initialExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

  const [walletBalance, setWalletBalance] = useState(initialWalletBalance);
  const [expenses, setExpenses] = useState(initialExpenses);

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [walletBalance, expenses]);

  const handleAddIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const handleAddExpense = (expense) => {
    if (expense.amount > walletBalance) {
      alert('Insufficient funds in the wallet.');
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const handleEditExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map(expense =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    updateWalletBalance(updatedExpenses);
  };

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    updateWalletBalance(updatedExpenses);
  };

  const updateWalletBalance = (updatedExpenses) => {
    const totalExpenses = updatedExpenses.reduce((acc, expense) => acc + expense.amount, 0);
    setWalletBalance(initialWalletBalance - totalExpenses);
  };

  return (
    <div className="App">
      <Navbar />
      <Section
        balance={walletBalance}
        onAddIncome={handleAddIncome}
        expenses={expenses}
        onAddExpense={handleAddExpense}
      />
      <div style={{
        display: 'flex',
        width: '100%', // Ensure full width of the parent container
      }}>
        <div style={{
          flex: '1 1 60%', // 60% width
          minWidth: '0', // Prevent flex item from shrinking too much
          marginLeft: '2rem',
          boxSizing: 'border-box', // Include padding in width calculation
        }}>
          <h3 style={{
            color: 'white',
            padding: "10px",
            fontSize: '1.5rem',
            fontFamily: 'Arial, sans-serif',
          }}>
            Recent Transactions
          </h3>
          <RecentTransactions
            expenses={expenses}
            onEditExpense={handleEditExpense}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
        <div style={{
          flex: '1 1 40%', // 40% width
          minWidth: '0', // Prevent flex item from shrinking too much
          boxSizing: 'border-box', // Include padding in width calculation
        }}>
          <h3 style={{
            color: 'white',
            padding: "10px",
            fontSize: '1.5rem',
            fontFamily: 'Arial, sans-serif',
          }}>
            Top Expenses
          </h3>
          <TopExpensesBarChart expenses={expenses}/>
        </div>
      </div>
    </div>
  );
}

export default App;
