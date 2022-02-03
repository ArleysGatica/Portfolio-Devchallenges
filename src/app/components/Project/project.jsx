import React from "react";
import "./project.css";
import team from "../../../images/team.png";
import check from "../../../images/check.png";
import edie from "../../../images/edie.png";

export const Project = props => {
  const {
    lenguaje,
    name,
    info,
    lenguaje2,
    name2,
    info2,
    lenguaje3,
    name3,
    info3,
  } = props;

  return (
    <>
      <div className="Project-container">
        <div className="Project-img-container">
          <img src={team} alt="" />
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
        <div className="card-1">
          <input type="button" value="Demo" />
          <input type="button" value="Repo" />
        </div>
      </div>
      <div className="Project-container-2">
        <div className="Project-img-container-2">
          <img src={check} alt="" />
        </div>
        <div className="Project-info-container-2">
          <div className="Project-info-lenguaje-2">
            <h3>{lenguaje2}</h3>
          </div>
          <div className="Project-info-name-2">
            <h3>{name2}</h3>
          </div>
          <div className="Project-info-description-2">
            <p>{info2}</p>
          </div>
        </div>
        <div className="card-2">
          <input type="button" value="Demo" />
          <input type="button" value="Repo" />
        </div>
      </div>
      <div className="Project-container-3">
        <div className="Project-img-container-3">
          <img src={edie} alt="" />
        </div>
        <div className="Project-info-container-3">
          <div className="Project-info-lenguaje-3">
            <h3>{lenguaje3}</h3>
          </div>
          <div className="Project-info-name-3">
            <h3>{name3}</h3>
          </div>
          <div className="Project-info-description-3">
            <p>{info3}</p>
          </div>
        </div>
        <div className="card-3">
          <input type="button" value="Demo" />
          <input type="button" value="Repo" />
        </div>
      </div>
    </>
  );
};
