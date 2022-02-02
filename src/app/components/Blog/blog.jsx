import React from "react";
import "./blog.css";
import re from "./../../../images/re.png";

export const Blog = props => {
  const { title, description, footer, header } = props;
  return (
    <>
      <div className="blog-container">
        <div className="blog-header">
          <p id="header">{header}</p>
          <h1>{title}</h1>
        </div>
        <div className="blog-img">
          <img src={re} alt="" />
        </div>
        <div className="blog-info">
          {description &&
            description.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <div className="blog-footer">
          <p>{footer}</p>
        </div>
      </div>
    </>
  );
};
