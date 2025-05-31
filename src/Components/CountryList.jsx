import Country from "./Country";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
import { useCities } from "../Context/CitiesProvider";
import Error from "./Error";

function CountryList() {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  if (!cities.length)
    return (
      <Message message="Add your first Country by clicking on a Country on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div className={styles.cities}>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Country country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
