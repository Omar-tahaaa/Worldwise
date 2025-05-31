import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import { useUrlParams } from "../hooks/useUrlParams";
import Spinner from "./Spinner";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useCities } from "../Context/CitiesProvider";

function Form() {
  const { addCity } = useCities();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [mapLat, mapLng] = useUrlParams();
  const [isLoadingGeoCode, setIsLoadingGeoCode] = useState(false);
  const [errorGeoCode, setErrorGeoCode] = useState("");
  useEffect(() => {
    async function fetchCity() {
      if (!mapLat && !mapLng) return;
      try {
        setIsLoadingGeoCode(true);

        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${mapLat}&longitude=${mapLng}`
        );
        const data = await res.json();
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
      } catch (error) {
        setErrorGeoCode("could not fetch city please click in another place");
      } finally {
        setIsLoadingGeoCode(false);
      }
    }
    fetchCity();
  }, [mapLat, mapLng]);

  function handleSubmit(e) {
    e.preventDefault();
    addCity({
      cityName,
      date,
      notes,
      country,
      position: { lat: mapLat, lng: mapLng },
    });
    navigate("/app/cities");
  }

  if (isLoadingGeoCode) return <Spinner />;

  if (errorGeoCode) return <p>{errorGeoCode}</p>;

  if (!mapLat && !mapLng) return <p>please click on any city</p>;

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="city">City Name</label>
        <input
          type="text"
          id="city"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <label htmlFor="date">When did you go to city</label>
        <div className={styles.datePikcer}>
          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <label htmlFor="notes">Notes about city</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        ></textarea>
        <div className={styles.btns}>
          <Button type="add">Add</Button>
          <Button
            type="back"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
