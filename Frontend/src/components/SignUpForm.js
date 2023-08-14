import React from "react";
import { useState } from "react";
import { makeApiRequest } from "../service/callApi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  });

  const isEmailValid = formValues.email.includes("@");
  const isUsernameValid = /^[A-Za-z]+$/.test(formValues.userName);

  const checks = {
    email: formValues.email.length >= 3 && isEmailValid,
    password: formValues.password.length >= 6,
    firstName: formValues.firstName.length >= 2,
    lastName: formValues.lastName.length >= 2,
    userName: formValues.userName.length >= 5 && isUsernameValid,
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage(true);

    if (Object.values(checks).every((check) => check)) {
      console.log("Tout est bon !");
      try {
        await makeApiRequest("signUp", null, formValues);
        navigate("/profile");
      } catch (error) {
        console.error("Error during sign-up:", error);
      }
    }
  };

  return (
    <main className="login">
      <div className="blur-container">
        {" "}
        <section className="modal-form">
          <div id="signup-container" className="form-ctnr">
            <h3>Créer un compte</h3>
            <form onSubmit={handleSignUp}>
              <label htmlFor="email">Email: </label>
              <input
                value={formValues.email}
                type="email"
                className="email"
                size="30"
                name="email"
                onChange={handleChange}
              />
              {!checks.email && errorMessage && (
                <p>
                  L'email doit contenir au minimum 3 caractéres, et le symbole
                  "@"
                </p>
              )}

              <label htmlFor="prenom">Prénom: </label>
              <input
                value={formValues.firstName}
                type="text"
                name="firstName"
                className="prenom"
                size="30"
                onChange={handleChange}
              />
              {!checks.firstName && errorMessage && (
                <p>Le prénom doit contenir au minimum 2 caractéres</p>
              )}

              <label htmlFor="famille">Nom de famille: </label>
              <input
                value={formValues.lastName}
                type="text"
                name="lastName"
                className="famille"
                size="30"
                onChange={handleChange}
              />
              {!checks.lastName && errorMessage && (
                <p>Le nom de famille doit contenir au minimum 2 caractéres</p>
              )}

              <label htmlFor="userName">Username: </label>
              <input
                value={formValues.userName}
                type="text"
                name="userName"
                className="username"
                size="30"
                onChange={handleChange}
              />
              {!checks.userName && errorMessage && (
                <p>L'username doit contenir au minimum 5 caractéres</p>
              )}

              <label htmlFor="password">Mot de passe :</label>
              <input
                value={formValues.password}
                type="password"
                name="password"
                className="password"
                onChange={handleChange}
              />
              {!checks.password && errorMessage && (
                <p>Le mot de passe doit contenir au minimum 6 caractéres</p>
              )}
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
