import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>An HyoJin 2021</p>
  </footer>
));

export default Footer;
