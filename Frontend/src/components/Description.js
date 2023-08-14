import React from "react";
import data from "../data/mainInfo";
import LottieAnim from "./Lottieanim"; // Assurez-vous d'avoir le bon chemin d'accès au composant

const Description = () => {
  return (
    <div className="description-ctnr">
      {data.map(({ image, title, description, id }) => (
        <div className="description-card" key={id}>
          {typeof image === "string" ? (
            <img src={image} alt={title} />
          ) : (
            <LottieAnim /> // Utilisation du composant LottieAnimation
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
