import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../../images/landing.png";
import landingLogoImage from "../../images/landing logo.png";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageLanding}>
        <img src={landingImage} alt="Landing Image" />
      </div>
      <div className={styles.welcomeLanding}>
        <h2>Welcome to</h2>
        <img src={landingLogoImage} alt="Logo" />

        <div className={styles.buttonLanding}>
          <Link to="/home" className={styles.linkLanding}>
            Let's go!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
