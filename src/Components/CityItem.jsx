import { useNavigate, useParams } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useEffect } from "react";
import { useCities } from "../Context/CitiesProvider";
import Spinner from "./Spinner";
import Error from "./Error";
function CityItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currCity, getCity, isLoading, error } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  const { cityName, date, emoji, notes } = currCity;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default CityItem;
