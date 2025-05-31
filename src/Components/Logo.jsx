import icon from "../assets/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
      <Link to="/">
        <img src={icon} alt="worldwiseIcon" />
      </Link>
    </>
  );
}

export default Logo;
