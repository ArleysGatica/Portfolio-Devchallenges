import React from "react";
import "./Home.css";
import { Profile } from "../components/Profile/profile";
import Foto from "./../../images/NichoDev.jpg";
import { FrontEnd } from "../components/Front-End/front-end";
import { Blog } from "../components/Blog/blog";

const App = () => {
  return (
    <>
      <div className="Home-profile-container">
        <Profile
          img={Foto}
          name="Arleys Gatica"
          occupation="Front-end Developer"
          city="Juigalpa,Chontales"
          mail="Gaticaarleys16@gmail.com"
          phone="+ (505) 86349918"
          description={[
            "Soy programador de nivel Junior. ",
            "Una de mis mayores motivaciones es aprender, ser autodidacta, responsable en diseñar y desarrollar. Haber participado en desarrollo de proyectos en equipo con diferentes lenguajes de programacion y diversas tecnologias para el desarrollo de software o aplicaciones. ",
            " Con amplitud a llenarme de mas conocimientos y habilidades para poder lograr converirme en un Full-Stack developer.",
          ]}
        />
      </div>
      <div className="Home-front-end-container">
        <FrontEnd
          title="Front-End"
          tecnologia={["HTML5", "CSS3", "JavaScript", "React", "NodeJS", "Git"]}
        />
      </div>
      <div className="Home-blog-container">
        <Blog
          title="How to organize your CSS"
          description={[
            "In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. ",
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
          ]}
          footer="Dev.to"
          header="blog"
        />
      </div>
    </>
  );
};

export default App;
