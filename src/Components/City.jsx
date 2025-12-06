import { Link } from "react-router-dom";
import { useCities } from "../Context/CitiesProvider";
import styles from "./City.module.css";

const formatDate = (date) => {
  if (!date) return "No date";
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "Invalid date";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObj);
};

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
          <span>{formatDate(city.date)}</span>
          <button onClick={handleDelete}>&times;</button>
        </div>
      </div>
    </Link>
  );
}

export default City;
