// LoginForm.js
import React from "react";
import sign from "../assets/img/icons8-nom-24.png";

const LoginForm = () => {
  return (
    <main className="login">
      <div className="blur-container">
        {" "}
        <section className="modal-form">
          <div className="form-ctnr">
            <img src={sign} alt="sign in" />
            <h3>S'identifier</h3>
            <form action="">
              <label htmlFor="email">Nom d'utilisateur (email) :</label>
              <input type="email" id="email" size="30" required />
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" name="password" required />
              <div className="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" />
                <label htmlFor="checkbox">Souviens-toi de moi</label>
              </div>
              <input id="submit" type="submit" value="S'identifier"></input>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginForm;
