import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner";

const HomePage = lazy(() => import("./Pages/HomePage"));
const PricingPage = lazy(() => import("./Pages/PricingPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));

import AppLayoutPage from "./Pages/AppLayoutPage";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import Form from "./Components/Form";
import CityItem from "./Components/CityItem";

import { CitiesProvider } from "./Context/CitiesProvider";
import Error from "./Components/Error";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="product" element={<ProductPage />} />

            <Route path="app" element={<AppLayoutPage />}>
              <Route index element={<CityList />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<CityItem />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
