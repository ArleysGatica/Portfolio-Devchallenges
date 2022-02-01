import React from "react";
import "./Home.css";
import { Profile } from "../components/Profile/profile";
import Foto from "./../../images/NichoDev.jpg";
import llamada from "./../../images/llamada.png";
import email from "./../../images/email.png";

const App = () => {
  return (
    <>
      <div className="Home-profile-container">
        <Profile
          img={Foto}
          name="Arleys Gatica"
          occupation="Front-end developer"
          mail="Gaticaarleys16@gmail.com"
          phone="+ (505) 86349918"
          description={[
            "Soy programador de nivel Junior. ",
            "Una de mis mayores motivaciones es aprender, ser autodidacta, responsable en diseñar y desarrollar. Haber participado en desarrollo de proyectos en equipo con diferentes lenguajes de programacion y diversas tecnologias para el desarrollo de software o aplicaciones. ",
            " Con amplitud a llenarme de mas conocimientos y habilidades para poder lograr converirme en un Full-Stack developer.",
          ]}
        />
      </div>
    </>
  );
};

export default App;
