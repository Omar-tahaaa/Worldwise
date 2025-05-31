import styles from "./Spinner.module.css";
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.customLoader}></div>
    </div>
  );
}

export default Spinner;
