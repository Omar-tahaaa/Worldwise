import City from "./City";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
import { useCities } from "../Context/CitiesProvider";
import Error from "./Error";

function CityList() {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <div className={styles.cities}>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <City city={city} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
