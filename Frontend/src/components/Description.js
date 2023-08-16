import React from "react";
import data from "../data/mainInfo";

const Description = () => {
  return (
    <div className="description-ctnr">
      {data.map(({ image, title, description, id }) => (
        <div className="description-card" key={id}>
          <img src={image} alt="description" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
