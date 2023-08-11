import React, { useState } from "react";
import sign from "../assets/img/icons8-nom-24.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignInData } from "../feature/SignIn";
import { makeApiRequest } from "../service/callApi.js";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleSignIn = async (e) => {
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
        console.error("Error during sign-in:", response.error);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <main className="login">
      <div className="blur-container">
        {" "}
        <section className="modal-form">
          <div className="form-ctnr">
            <img src={sign} alt="sign in" />
            <h3>S'identifier</h3>
            <form onSubmit={handleSignIn}>
              <label className="center-left" htmlFor="email">
                Nom d'utilisateur (email) :
              </label>
              <input
                autoComplete="username"
                value={username}
                type="email"
                className="email"
                size="30"
                required
                onChange={({ target }) => setUserName(target.value)}
              />
              <label className="centerLeft" htmlFor="password">
                Mot de passe :
              </label>
              <input
                autoComplete="password"
                value={password}
                type="password"
                className="password"
                name="password"
                required
                onChange={({ target }) => setPassword(target.value)}
              />

              <div className="checkbox">
                <input
                  checked={checkbox}
                  onChange={handleCheckbox}
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                />
                <label htmlFor="checkbox">Souviens-toi de moi</label>
              </div>
              <input
                id="submit-form"
                className="submit"
                type="submit"
                value="S'identifier"
              ></input>
              <NavLink to="/signup">
                <input
                  className="submit"
                  type="submit"
                  value="Créer un compte"
                ></input>
              </NavLink>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginForm;
