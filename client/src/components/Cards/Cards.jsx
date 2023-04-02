import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import errorCards from "../../images/errorsDetail.png";

const Cards = () => {
  const { allDogs, name, temperament, page, filter, order } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs(name, temperament, page, filter, order));
  }, [page, name, filter, order, temperament]);

  return (
    <div>
      {/* <h3 className={styles.titleCards}>Breeds</h3> */}
      <div className={styles.containerGeneral}>
        <div className={styles.containerCards}>
          {allDogs && allDogs.length > 0 ? (
            allDogs.map((dog) => (
              <Card
                className={styles.itemsContainerCards}
                key={dog.id}
                id={dog.id}
                name={dog.name}
                temperaments={dog.temperaments}
                image={dog.image}
                weightMin={dog.weightMin}
                weightMax={dog.weightMax}
              />
            ))
          ) : (
            <div className={styles.divErrors}>
              <div>
                <h3 className={styles.textError}>Error!</h3>
                <p className={styles.pError}>Dog matches not found</p>
              </div>

              <img src={errorCards} alt="Error" className={styles.imgErrors} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
