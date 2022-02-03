import React from "react";
import "./front-end.css";

export const FrontEnd = props => {
  const { title, tecnologia } = props;

  return (
    <>
      <div className="front-end-container">
        <div className="front-end-info">
          <h1>{title}</h1>
        </div>
        <div className="container-tecnologia">
          {tecnologia &&
            tecnologia.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <div className="Html">
          <div className="rayas"></div>
          <div className="rayas2"></div>
        </div>
        <div className="css">
          <div className="rayas-css"></div>
          <div className="rayas2-css"></div>
        </div>
        <div className="js">
          <div className="rayas-js"></div>
          <div className="rayas2-js"></div>
        </div>
        <div className="react">
          <div className="rayas-react"></div>
          <div className="rayas2-react"></div>
        </div>
        <div className="node">
          <div className="rayas-node"></div>
          <div className="rayas2-node"></div>
        </div>
        <div className="git">
          <div className="rayas-git"></div>
          <div className="rayas2-git"></div>
        </div>
      </div>
    </>
  );
};
