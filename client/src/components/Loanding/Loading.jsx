import React from "react";
import imageLoading from "../../images/huella loading.png";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.divLoading}>
      <img src={imageLoading} alt="Loading" className={styles.imageLoading} />
    </div>
  );
};

export default Loading;
