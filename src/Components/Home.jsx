import { useAuth } from "../Context/FakeAuthProvider";
import styless from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <section className={styless.home}>
      <h1>
        You travel the world.
        <br /> WorldWise keeps track of your adventures.
      </h1>
      <h2>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h2>
      <Link to={isAuthenticated ? "app" : "login"}>start tracking now</Link>
    </section>
  );
}

export default Home;
