// LoginForm.js
import React, { useEffect, axios } from "react";
import sign from "../assets/img/icons8-nom-24.png";
import { useDispatch } from "react-redux";
import { setSignInData } from "../feature/user.slice";

const LoginForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/v1/user/login")
      .then((res) => dispatch(setSignInData(res.data)));
  }, []);

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
