import { NavLink } from "react-router-dom";
import styless from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <div className={styless.nav}>
      <div className={styless.imgContainer}>
        <Logo />
      </div>

      <div className={styless.list}>
        <ul>
          <li>
            <NavLink to="/pricing">pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styless.login}>
              login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageNav;
