import React from 'react';
import styles from './Footer.module.scss'; 
export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4>Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>My Account</h4>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Other</h4>
          <ul>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Address</h4>
          <address>
            Address: 1234 Street<br />
            Address City, Address, 1234<br />
            Phones: <a href="tel:+0012345678">(00) 1234 5678</a>
          </address>
        </div>
      </div>
    </footer>
  );
};
