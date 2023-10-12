import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png";
import sign from "../assets/img/icons8-nom-24.png";
import { makeApiRequest } from "../service/callApi";

const Header = () => {
  const token = localStorage.getItem("token");
  const isConnected = token;
  const [, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isConnected) {
          const data = await makeApiRequest("getProfile", token, {});
          setUserData(data.body.userName);
        }
      } catch (error) {
        console.error("Error fetching user data:", error); // ! supprimez le token
      }
    };

    fetchUserData();
  }, [isConnected, token]);

  const handleLogout = () => {
    if (isConnected) {
      localStorage.removeItem("token");
      console.log("Token removed!");
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
            <>
              <Link className="nav-active" to="/profile">
                <img src={sign} alt="sign in / sign out" />
              </Link>
              <button className="Btn" onClick={handleLogout}>
                <div className="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>

                <div className="text">Logout</div>
              </button>
            </>
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
