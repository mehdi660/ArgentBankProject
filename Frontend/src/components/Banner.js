import React from "react";
import banner from "../assets/img/bank-treee.jpeg";

const Banner = () => {
  return (
    <main>
      <div className="banner">
        <img className="banner-img" src={banner} alt="Banniére du site" />
        <div className="text-bnr-container">
          <div className="text-bnr">
            <h2>
              Pas de frais.<br></br> Aucun dépôt minimum.<br></br> Taux
              d'intérêt élevés.<br></br>
            </h2>
            <p>
              Ouvrez un compte d'épargne avec<br></br> Argent Bank dès
              aujourd'hui !
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
