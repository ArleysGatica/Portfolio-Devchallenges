import React from "react";
import "./Home.css";
import { Profile } from "../components/Profile/profile";
import Foto from "./../../images/NichoDev.jpg";
import { FrontEnd } from "../components/Front-End/front-end";
import { Blog } from "../components/Blog/blog";
import { Hobbies } from "../components/Hobbies/hobbies";
import { Experiences } from "../components/Experiences/experiences";
import { Project } from "../components/Project/project";
import { Bar } from "../components/Bar/bar";

const App = () => {
  return (
    <>
      <div className="Home-profile-container">
        <Profile
          img={Foto}
          name="Arleys Gatica"
          occupation="Front-end Developer"
          city="Juigalpa,Chontales"
          mail="Gatica.arleys16@gmail.com"
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
      <div className="Home-hobbies-container">
        <Hobbies
          title="Hobbies"
          category="Clash Royales"
          description="Juego de entretenimiento para pasar el rato y jugar en las madrugadas !!"
          category2="Programacion"
          description2="Mas que un Hobbies es una enseñansa e aprendisaje dia a dia con nuevas cosas que se descubren en el camino !!"
          category3="Futbol"
          description3="Cuando se puede nada mas.. !!"
        />
      </div>
      <div className="Home-experiences-container">
        <Experiences
          title="Experiencia"
          occupation="Tutor system engineer"
          years="Noviembre 2020"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. "
          occupation2="Front-End Developer"
          years2="Octubre 2021"
          description2="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. "
        />
      </div>
      <div className="Home-bar-container">
        <Bar title="Proyectos (3)" />
      </div>
      <div className="Home-project-container">
        <Project
          lenguaje="#HTML5  #CSS3 #Responsive"
          name="Page-team"
          info="Aplicacion web para la gestion de los nichos de la empresa"
          lenguaje2="#HTML5  #CSS3 "
          name2="Store"
          info2="Aplicacion web para la gestion de los nichos de la empresa"
          lenguaje3="#HTML5  #CSS3"
          name3="Page-Edie"
          info3="Aplicacion web para la gestion de los nichos de la empresa"
        />
      </div>
    </>
  );
};

export default App;
