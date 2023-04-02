import React from "react";
import styles from "./Footer.module.css";
import imageGithub from "../../images/github.png";
import imageLinkedin from "../../images/linkedin.png";
import imageGmail from "../../images/gmail.png";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.divRedes}>
        <img src={imageGithub} alt="Image GitHub" />
        <p>
          <a href="https://github.com/flormedinav" target="back">
            GitHub
          </a>
        </p>

        <img src={imageLinkedin} alt="Image Linkedin" />
        <p>
          <a href="https://www.linkedin.com/in/flormedinav/" target="back">
            LinkedIn
          </a>
        </p>

        <img src={imageGmail} alt="Image Gmail" />
        <p>
          <a href="mailto:flormedinav7@gmail.com" target="back">
            Email
          </a>
        </p>
      </div>

      <h5>© Copyright 2023 Florencia Medina</h5>
    </div>
  );
};

export default Footer;
