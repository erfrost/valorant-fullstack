import "./Header.css";
import logo from "../../assets/logo.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";

const Header = () => {
  return (
    <div className="container-header">
      <Link to="/" style={{ height: "100%" }}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="menu-block">
        <LoginBtn />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
