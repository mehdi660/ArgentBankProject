import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h4>Erreur 404</h4>
      <NavLink to={"/"}>
        <p>
          Oups ! la page que vous avez demandez n'est pas accessible, cliquez
          ici pour retourner à l'acceuil
        </p>
      </NavLink>
    </div>
  );
};

export default Error;
