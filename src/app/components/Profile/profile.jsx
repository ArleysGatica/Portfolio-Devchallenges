import React from "react";
import "./profile.css";

export const Profile = props => {
  const { img, name, occupation, mail, phone, description } = props;

  console.log(name);
  return (
    <>
      <div className="profile-container">
        <div className="profile-img">
          <img src={img} alt="profile" />
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h2>{occupation}</h2>
        </div>
        <div className="container-description">
          {description &&
            description.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <div className="profile-contact">
          <div className="profile-contact-item">
            <i className="fas fa-envelope"></i>
            <p>{mail}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};
