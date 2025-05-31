import Home from "../Components/Home";
import PageNav from "../Components/PageNav";
import styless from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styless.homePage}>
      <PageNav />
      <Home />
    </div>
  );
}

export default HomePage;
