import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/img/argentBankLogo.png";
import sign from "../assets/img/icons8-nom-24.png";
import { makeApiRequest } from "../service/callApi";

const Header = () => {
  const token = localStorage.getItem("token");
  const isConnected = token;
  const dataUser = useSelector((state) => state.profile);
  const [userData, setUserData] = useState({}); // state pour stocker les données de l'utilisateur

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // verification si l'user est connecté
        if (isConnected) {
          const data = await makeApiRequest("getProfile", token, {});
          setUserData(data.body.userName); // Stockage des données dans le state
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [isConnected, token]);

  const handleLogout = () => {
    if (isConnected) {
      localStorage.removeItem("token");
      console.log("Token removed!");
      // Rediriger l'user vers la page d'accueil
      window.location.href = "/login";
    }
  };

  return (
    <header className="conteneur-hdr">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="ArgentBank logo" />
        </Link>
      </div>
      <div className="navigation">
        <ul>
          {isConnected ? (
            <li className="nav-log">
              <img src={sign} alt="sign in / sign out" />
              <Link className="nav-active" to="/profile">
                {dataUser.userName}
              </Link>
              <button className="signout" onClick={handleLogout}>
                Déconnexion
              </button>
            </li>
          ) : (
            <li className="nav-active">
              <Link to="/login">
                <img src={sign} alt="sign in / sign out" />
                S'identifier/Créer un compte
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
