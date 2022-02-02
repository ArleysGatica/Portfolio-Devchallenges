import React from "react";
import "./hobbies.css";
import clash from "./../../../images/clash.jpg";
import programacion from "./../../../images/programacion.jpg";
import futbol from "./../../../images/futbol.jpg";

export const Hobbies = props => {
  const {
    title,
    description,
    category,
    description2,
    category2,
    description3,
    category3,
  } = props;

  return (
    <>
      <div className="hobbies-container">
        <div className="hobbies-title">
          <h3>{title}</h3>
        </div>
        <div className="hobbies-img">
          <img src={clash} alt="progrmacion" />
        </div>
        <div className="hobbies-info">
          <strong>{category}</strong>
          <p>{description}</p>
        </div>
      </div>
      <div className="hobbies-container">
        <div className="hobbies-img">
          <img src={programacion} alt="progrmacion" />
        </div>
        <div className="hobbies-info">
          <strong>{category2}</strong>
          <p>{description2}</p>
        </div>
      </div>
      <div className="hobbies-container">
        <div className="hobbies-img">
          <img src={futbol} alt="progrmacion" />
        </div>
        <div className="hobbies-info">
          <strong>{category3}</strong>
          <p>{description3}</p>
        </div>
      </div>
    </>
  );
};
