import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
    </div>
  );
}

export default Footer;
