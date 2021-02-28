import "../Styles/Header.css";
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import HeaderLogo from "../logoCircleTitle.png";

const Header = () => {
  // flex box style + <Link> wrapping an <img> creates odd behavior.
  // Wrapping <img> with a <Link> or using onClick on the <img> to trigger
  //a <Link> does not work. The onClick is triggered but the <Link> doesnt
  //fire, while the wrapping idea creates a clickable white space that
  //extends to the end of flexbox, this is unintended and cannot be removed
  //with any CSS styling. Thus far the useHistory hook has been the only solution.
  const history = useHistory();
  const goToHome = () => history.push("/");

  return (
    <div className="container">
      <img src={HeaderLogo} alt="Logo" onClick={goToHome} className="logo"/>
      <div className="nav-container">
      <NavBar />
      </div>
    </div>
  );
};

export default Header;
