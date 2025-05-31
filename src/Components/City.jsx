import { Link } from "react-router-dom";
import { useCities } from "../Context/CitiesProvider";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City({ city }) {
  const { deleteCity } = useCities();
  async function handleDelete(e) {
    e.preventDefault();
    await deleteCity(city.id);
  }

  return (
    <Link
      to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
    >
      <div className={styles.details}>
        <span className={styles.cityName}>{city.cityName}</span>
        <div className={styles.dateAndButton}>
          <span>{formatDate(city.date) || null}</span>
          <button onClick={handleDelete}>&times;</button>
        </div>
      </div>
    </Link>
  );
}

export default City;
