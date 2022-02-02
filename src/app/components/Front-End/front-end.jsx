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
      </div>
    </>
  );
};