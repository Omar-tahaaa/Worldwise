import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../Context/CitiesProvider";

import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlParams } from "../hooks/useUrlParams";
function Map() {
  const { cities } = useCities();
  const [mapLat, mapLng] = useUrlParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { isLoading, position, getPosition } = useGeolocation(mapPosition);

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);
  useEffect(() => {
    if (position.lat && position.lng) {
      setMapPosition([position.lat, position.lng]);
    }
  }, [position.lat, position.lng]);

  return (
    <div className={styles.mapContainer}>
      <button onClick={getPosition} className={styles.location}>
        {isLoading ? "loading" : "use current location"}
      </button>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
