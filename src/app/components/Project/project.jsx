import React from "react";
import "./project.css";
import hack from "../../../images/hack.jpeg";

export const Project = props => {
  const { lenguaje, name, info } = props;

  return (
    <>
      <div className="Project-container">
        <div className="Project-img-container">
          <img src={hack} alt="" />
        </div>
        <div className="Project-info-container">
          <div className="Project-info-lenguaje">
            <h3>{lenguaje}</h3>
          </div>
          <div className="Project-info-name">
            <h3>{name}</h3>
          </div>
          <div className="Project-info-description">
            <p>{info}</p>
          </div>
        </div>
      </div>
    </>
  );
};
