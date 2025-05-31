import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner";

import ProtectedRoute from "./Components/ProtectedRoute";

const HomePage = lazy(() => import("./Pages/HomePage"));
const PricingPage = lazy(() => import("./Pages/PricingPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));

import AppLayoutPage from "./Pages/AppLayoutPage";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import Form from "./Components/Form";
import CityItem from "./Components/CityItem";

import { CitiesProvider } from "./Context/CitiesProvider";
import { AuthProvider } from "./Context/FakeAuthProvider";
import Error from "./Components/Error";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="login" element={<LoginPage />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayoutPage />
                  </ProtectedRoute>
                }
              >
                <Route index element={<CityList />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<CityItem />} />
                {/* <Route path=":id" element={<CityItem />} /> */}
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
