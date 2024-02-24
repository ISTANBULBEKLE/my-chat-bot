import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        {/* You can replace 'YourBrandIcon' with your actual brand icon */}
        <img src="YourBrandIcon" alt="Brand Icon" />
      </div>
      <div className={styles.links}>
        <a href="/demo">Demo</a>
        <a href="/history">History</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;