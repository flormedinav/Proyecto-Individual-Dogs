import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, name, temperaments, image, weightMin, weightMax }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.divImageTittle}>
        <Link to={`/detail/${id}`} className={styles.titleCard}>
          <div className={styles.divTitleCard}>
            <h3>{name}</h3>
          </div>

          <div className={styles.divImageCard}>
            <img src={image} alt={name} className={styles.imageCard} />
          </div>
        </Link>
      </div>

      <div className={styles.divWeight}>
        <h4 className={styles.titleWeight}>Weight:</h4>
        <p className={styles.pWeight}>
          {weightMin} - {weightMax} kg
        </p>
      </div>
      <div className={styles.divTemperaments}>
        <h4 className={styles.titleTemperaments}>Temperaments:</h4>
        {temperaments ? (
          <div className={styles.divItemsTemperaments}>
            {temperaments.slice(0, 4).map((temp) => (
              <p className={styles.itemTemperament}>{temp.name}</p>
            ))}
          </div>
        ) : (
          <div className={styles.divItemsTemperaments}>
            <p className={styles.itemTemperament}>Friendly</p>
            <p className={styles.itemTemperament}>Docile</p>
            <p className={styles.itemTemperament}>Energetic</p>
            <p className={styles.itemTemperament}>Loyal</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
