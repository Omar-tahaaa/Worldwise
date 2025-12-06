import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currCity: action.payload,
      };
    case "city/added":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currCity: {},
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      throw new Error("there is error");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const querySnapshot = await getDocs(collection(db, "cities"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: "can not fetch cities" });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (id === currCity.id) return;
      dispatch({ type: "loading" });
      try {
        const docRef = doc(db, "cities", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = { ...docSnap.data(), id: docSnap.id };
          dispatch({ type: "city/loaded", payload: data });
        } else {
          dispatch({ type: "rejected", payload: "City not found" });
        }
      } catch (error) {
        dispatch({ type: "rejected", payload: "can not fetch city" });
      }
    },
    [currCity.id]
  );

  async function addCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const docRef = await addDoc(collection(db, "cities"), newCity);
      const data = { ...newCity, id: docRef.id };
      dispatch({ type: "city/added", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: "can not add city" });
    }
  }
  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await deleteDoc(doc(db, "cities", id));
      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({ type: "rejected", payload: "can not delete city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currCity,
        getCity,
        addCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citiesContext was used outside of the citiesProvider");
  return context;
}

export { CitiesProvider, useCities };
