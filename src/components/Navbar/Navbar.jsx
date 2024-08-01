// components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarBrand}>Expense Tracker</div>
    </div>
  );
}

export default Navbar;
