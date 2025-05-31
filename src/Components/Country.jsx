import styles from "./City.module.css";
function Country({ country }) {
  return (
    <div>
      <div className={styles.details}>
        <span className={styles.cityName}>{country.country}</span>
      </div>
    </div>
  );
}

export default Country;
