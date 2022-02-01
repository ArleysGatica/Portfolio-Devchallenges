import React from "react";
import "./profile.css";
import llamada from "./../../../images/llamada.png";
import email from "./../../../images/email.png";

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
        <div className="container-contact">
          <div className="profile-email">
            <img src={email} alt="mail" />
            <p>{mail}</p>
          </div>
          <div className="profile-phone">
            <img src={llamada} alt="phone" />
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};
