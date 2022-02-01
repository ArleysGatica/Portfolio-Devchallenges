import React from "react";
import "./Home.css";
import { Profile } from "../components/Profile/profile";
import Foto from "./../../images/NichoDev.jpg";

const App = () => {
  return (
    <>
      <div className="Home-profile-container">
        <Profile
          img={Foto}
          name="Arleys Gatica"
          occupation="Front-end developer"
          mail="Gaticaarleys16@gmail.com"
          phone="+505 86349918"
          description={[
            " Self-motivated developer, who is willing to learn and create outstanding UI applications. ",
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
          ]}
        />
      </div>
    </>
  );
};

export default App;
