import React from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../../images/errors.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.containerGeneralErrors}>
      <Link to="/home" className={styles.buttonBack}>
        Go to home
      </Link>
      <div className={styles.divContainerErrors}>
        <div className={styles.textErrors}>
          <h3 className={styles.textStop}>Stop!</h3>
          <h3 className={styles.textError404}>Error 404</h3>
        </div>

        <img src={imageNotFound} alt="Error 404" className={styles.imgErrors} />
      </div>
    </div>
  );
};

export default NotFound;
