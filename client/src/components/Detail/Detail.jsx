import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import errorDetail from "../../images/errorsDetail.png";
import Loading from "../Loanding/Loading";
import {
  getDetailDogs,
  loadingPage,
  clearDetailDogs,
} from "../../redux/actions";
import styles from "./Detail.module.css";

const Detail = () => {
  const { idRace } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { dogsDetail, loading } = useSelector((state) => state);
  const {
    id,
    name,
    image,
    temperaments,
    lifeSpan,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
  } = dogsDetail;

  useEffect(() => {
    const getDetail = async () => {
      dispatch(loadingPage(true)); //Activa el estado loading
      await dispatch(getDetailDogs(idRace));
      dispatch(loadingPage(false)); //Desactiva el estado loading
    };
    getDetail();
  }, [idRace]);

  const handleClearDetail = () => {
    dispatch(clearDetailDogs());
  };

  //Aquí estoy usando el useHistory para que cuando haga para atrás en el detalle me lleve a la página en la que me encontraba
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.containerDetail}>
          <button
            className={styles.buttonDetail}
            onClick={(handleClearDetail, handleGoBack)}
          >
            Back
          </button>

          {Object.keys(dogsDetail).length === 0 ? (
            <div className={styles.divErrorsDetail}>
              <div>
                <h3 className={styles.textError}>Error!</h3>
                <p className={styles.pError}>There is no dog with that id</p>
              </div>

              <img
                src={errorDetail}
                alt="Error Detail"
                className={styles.imgErrors}
              />
            </div>
          ) : (
            <div className={styles.containerDetailInfo}>
              <div className={styles.divInfoDetail}>
                <h3 key={id} className={styles.nameDetail}>
                  {name}
                </h3>

                <div className={styles.divInfoWHLS}>
                  <div className={styles.divWeight}>
                    <h3 className={styles.titleWeight}>Weight</h3>
                    <p className={styles.textWeight}>
                      {weightMin} - {weightMax} kg
                    </p>
                  </div>
                  <div className={styles.divHeight}>
                    <h3 className={styles.titleHeight}>Height</h3>
                    <p className={styles.textHeight}>
                      {heightMin} - {heightMax} cm
                    </p>
                  </div>
                  <div className={styles.divLifeSpan}>
                    <h3 className={styles.titleLifeSpan}>Life Span</h3>
                    <p className={styles.textLifeSpan}>{lifeSpan}</p>
                  </div>
                </div>

                <div className={styles.divTemperaments}>
                  <h3 className={styles.titleTemperaments}>Temperaments</h3>
                  {temperaments ? (
                    <div className={styles.divItemsTemperaments}>
                      {temperaments.map((temp) => (
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
              <div className={styles.divImageDetail}>
                <img src={image} alt={name} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
