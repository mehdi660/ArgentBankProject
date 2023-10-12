import React, { useState, useEffect } from "react";
import sign from "../assets/img/icons8-nom-24.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignInData } from "../feature/SignIn";
import { makeApiRequest } from "../service/callApi.js";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Chargement du state de la checkbox depuis le localStorage
    const savedCheckbox = localStorage.getItem("rememberMe");
    if (savedCheckbox) {
      setCheckbox(JSON.parse(savedCheckbox));
    }
  }, []);

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
    localStorage.setItem("rememberMe", JSON.stringify(!checkbox));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await makeApiRequest("login", null, {
        email: username,
        password,
      });

      if (response.body.token) {
        localStorage.setItem("token", response.body.token);
        console.log("Connexion réussie ! Token:", response.body.token);
        dispatch(setSignInData({ response }));
        navigate("/profile");
      } else {
        setErrorMessage("Nom d'utilisateur ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setErrorMessage("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <main className="login">
      <div className="blur-container">
        <section className="modal-form">
          <div className="form-ctnr">
            <img src={sign} alt="sign in" />
            <h3>S'identifier</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email :</label>
              <input
                autoComplete="username"
                type="email"
                className="email"
                size="30"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Mot de passe :</label>
              <input
                autoComplete="password"
                type="password"
                className="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkbox}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox">Souviens-toi de moi</label>
              </div>
              <input className="submit" type="submit" value="S'identifier" />
              <NavLink to="/signup">
                <input
                  className="submit"
                  type="submit"
                  value="Créer un compte"
                />
              </NavLink>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginForm;
