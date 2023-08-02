import React from "react";

const SignUp = () => {
  return (
    <main className="login">
      <div className="blur-container">
        {" "}
        <section className="modal-form">
          <div className="form-ctnr">
            <h3>Créer un compte</h3>
            <form action="">
              <label htmlFor="email">Email: </label>
              <input type="email" className="email" size="30" required />
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                className="password"
                name="password"
                required
              />
              <label htmlFor="prenom">Prénom: </label>
              <input type="text" className="prenom" size="30" required />
              <label htmlFor="famille">Nom de famille: </label>
              <input type="text" className="famille" size="30" required />
              <label htmlFor="username">Iddentifiant: </label>
              <input type="text" className="username" size="30" required />
              <input
                className="submit"
                type="submit"
                value="Créer un compte"
              ></input>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
