import React from "react";
import "./experiences.css";
import rally2 from "../../../images/rally.jpg";
import hack from "../../../images/hack.jpeg";

export const Experiences = props => {
  const {
    title,
    occupation,
    years,
    description,
    occupation2,
    years2,
    description2,
  } = props;

  return (
    <>
      <div className="experiences-container">
        <h3 id="title">{title}</h3>
        <div className="experiences-img">
          <img src={rally2} alt="experiences" />
        </div>
        <div className="experiences-info">
          <h3>{years}</h3>
          <strong>{occupation}</strong>
        </div>
        <div className="container-description-item">
          <p>{description}</p>
        </div>
      </div>
      <div className="experiences-container-2">
        <div className="experiences-img-2">
          <img src={hack} alt="experiences" />
        </div>
        <div className="experiences-info-2">
          <h3>{years2}</h3>
          <strong>{occupation2}</strong>
        </div>
        <div className="container-description-item-2">
          <p>{description2}</p>
        </div>
      </div>
    </>
  );
};
