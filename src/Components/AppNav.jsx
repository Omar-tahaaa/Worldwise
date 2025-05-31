import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function AppNav() {
  return (
    <div className={styles.AppNav}>
      <NavLink to="cities">cites</NavLink>
      <NavLink to="countries">countries</NavLink>
    </div>
  );
}

export default AppNav;
