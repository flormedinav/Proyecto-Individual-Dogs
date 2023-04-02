import React from "react";
import imageAbout from "../../images/about.png";
import { useHistory } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.containerGeneralAbout}>
      <button className={styles.buttonAbout} onClick={handleGoBack}>
        Back
      </button>
      <div className={styles.divInfoAbout}>
        <img src={imageAbout} alt="Image about" className={styles.imageAbout}/>
        <div className={styles.divPresentacionAbout}>
          <h2>
            Hello, my name is <span>Florencia Medina</span>!
          </h2>
          <h3>
            I am the creator of this dog app. I hope you enjoy the experience.
          </h3>

          <h3>
            <span>Used technologies</span>
          </h3>
          <div className={styles.divTecnologies}>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>Redux</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Sequelize</p>
            <p>Postgres SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
