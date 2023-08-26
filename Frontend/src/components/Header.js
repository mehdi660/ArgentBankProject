import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png";
import sign from "../assets/img/icons8-nom-24.png";

const Header = () => {
  const location = useLocation(); // Obtenir l'emplacement actuel
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    if (token) {
      <NavLink to={"/"} />;
      localStorage.removeItem("token");
      console.log("token removed !");
    }
  };

  const handleAlert = () => {
    if (token) {
      localStorage.removeItem("token");
      alert("attention, revenir à la page d'acceuil vous déconnectera");
    }
  };

  return (
    <header className="conteneur-hdr">
      <div className="logo">
        <NavLink to="/" onClick={handleAlert}>
          <img src={Logo} alt="ArgentBank logo" />
        </NavLink>
      </div>
      <div className="navigation">
        <ul>
          <NavLink to="/login" onClick={handleLogout}>
            <img src={sign} alt="sign in / sign out" />
            <li
              className={location.pathname === "/profile" ? "nav-active" : ""}
            >
              {location.pathname === "/profile"
                ? "Se déconnecter"
                : "S'identifier/Créer un compte"}
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
