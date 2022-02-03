import React from "react";
import "./bar.css";

export const Bar = props => {
  const { title } = props;

  return (
    <>
      <div className="bar">
        <div className="bar-title">{title}</div>
        <div className="buttons">
          <div className="button1">
            <input type="button" value="Vue" />
          </div>
          <div className="button2">
            <input type="button" value="React" />
          </div>
          <div className="button3">
            <input type="button" value="Responsive" />
          </div>
        </div>
      </div>
    </>
  );
};
