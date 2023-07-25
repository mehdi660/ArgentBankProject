import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png";
import sign from "../assets/img/icons8-nom-24.png";

const Header = () => {
  return (
    <header className="conteneur-hdr">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="ArgentBank logo" />
        </NavLink>
      </div>
      <div className="navigation">
        <ul>
          <NavLink to="/profile">
            <img src={sign} alt="sign in" />
            <li className="nav-active">S'identifier</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
