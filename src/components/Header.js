import "../Styles/Header.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import HeaderLogo from "../logoCircleTitle.png";

const Header = () => {
  return (
    <div className="container">
      <Link to="/">
        <img src={HeaderLogo} alt="Logo" />
      </Link>
      Header
      <NavBar />
    </div>
  );
};

export default Header;
