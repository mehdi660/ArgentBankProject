import React from "react";
import { useState } from "react";
import { makeApiRequest } from "../service/callApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SignUp = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  });

  // const isEmailValid = formValues.email.includes("@");
  const isUsernameValid = /^[A-Za-z]+$/.test(formValues.userName);

  const checks = {
    email: formValues.email.length >= 3,
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

        setTimeout(() => {
          MySwal.fire(
            "Bienvenu chez ArgentBank!",
            "Vous pouvez maintenant vous connecter avec vos identifiants.",
            "success"
          );
        }, 1500);
        navigate("/login");
      } catch (error) {
        console.error("Error during sign-up:", error);
      }
    }
  };

  return (
    <main className="login">
      <div className="blur-container">
        <section className="modal-form">
          <div id="signup-container" className="form-ctnr">
            <h3>Créer un compte</h3>
            <form onSubmit={handleSignUp}>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                value={formValues.email}
                type="email"
                className="email"
                size="30"
                name="email"
                onChange={handleChange}
              />

              <label htmlFor="prenom">Prénom: </label>
              <input
                id="prenom"
                value={formValues.firstName}
                type="text"
                name="firstName"
                className="prenom"
                size="30"
                onChange={handleChange}
              />

              <label htmlFor="famille">Nom de famille: </label>
              <input
                id="famille"
                value={formValues.lastName}
                type="text"
                name="lastName"
                className="famille"
                size="30"
                onChange={handleChange}
              />

              <label htmlFor="userName">Username: </label>
              <input
                id="userName"
                value={formValues.userName}
                type="text"
                name="userName"
                className="username"
                size="30"
                onChange={handleChange}
              />

              <label htmlFor="password">Mot de passe :</label>
              <input
                id="password"
                value={formValues.password}
                type="password"
                name="password"
                className="password"
                onChange={handleChange}
              />

              <input
                id="submit_btn"
                className="submit"
                type="submit"
                value="Créer un compte"
              ></input>
            </form>
            <></>
            {!checks.email && errorMessage && (
              <p className="error_mssg">
                L'email doit contenir au minimum 3 caractéres, et le symbole "@"
              </p>
            )}
            {!checks.firstName && errorMessage && (
              <p className="error_mssg">
                Le prénom doit contenir au minimum 2 caractéres
              </p>
            )}
            {!checks.lastName && errorMessage && (
              <p className="error_mssg">
                Le nom de famille doit contenir au minimum 2 caractéres
              </p>
            )}
            {!checks.userName && errorMessage && (
              <p className="error_mssg">
                L'username doit contenir au minimum 5 caractéres
              </p>
            )}
            {!checks.password && errorMessage && (
              <p className="error_mssg">
                Le mot de passe doit contenir au minimum 6 caractéres
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
