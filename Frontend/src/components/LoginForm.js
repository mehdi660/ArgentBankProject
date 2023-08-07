import React, { useEffect } from "react";
import sign from "../assets/img/icons8-nom-24.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";

const LoginForm = () => {
  // const login = useSelector((setSignInData) => setSignInData);

  return (
    <main className="login">
      <div className="blur-container">
        {" "}
        <section className="modal-form">
          <div className="form-ctnr">
            <img src={sign} alt="sign in" />
            <h3>S'identifier</h3>
            <form action="">
              <label className="center-left" htmlFor="email">
                Nom d'utilisateur (email) :
              </label>
              <input type="email" className="email" size="30" required />
              <label className="centerLeft" htmlFor="password">
                Mot de passe :
              </label>
              <input
                type="password"
                className="password"
                name="password"
                required
              />
              <div className="checkbox">
                <input type="checkbox" className="checkbox" name="checkbox" />
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
