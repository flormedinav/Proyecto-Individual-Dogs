import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadingPage, getTemperament } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";
import Loading from "../Loanding/Loading";
import SearchBar from "../SearchBar/SearchBar";
import Select from "../Select/Select";
import homeImage from "../../images/home3.png";
import landingLogoImage from "../../images/landing logo.png";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);

  useEffect(() => {
    const getTemp = async () => {
      dispatch(loadingPage(true));
      await dispatch(getTemperament());
      dispatch(loadingPage(false));
    };

    getTemp();
  }, [dispatch]);

  return (
    <div className={styles.containerGeneral}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.containerInfo}>
          <div className={styles.containerLandingHome}>
            <div className={styles.welcomeLanding}>
              <h2>Enjoy the experience of</h2>
              <div className={styles.divImage}>
                <img src={landingLogoImage} alt="Logo" />
              </div>

              <button
                className={styles.buttonLanding}
                onClick={() => {
                  const sectionBelow = document.getElementById("sectionBelow");
                  window.scrollTo({
                    top: sectionBelow.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <span>See breeds!</span>
              </button>
            </div>
            <div className={styles.imageLanding}>
              <img src={homeImage} alt="Landing Image" />
            </div>
          </div>

          <div id="sectionBelow" className={styles.divSearchFilterOrder}>
            <SearchBar className={styles.divFilterOrder} />
            <Select />
          </div>

          <Cards id="sectionBelow" />
          <Paginado />
        </div>
      )}
    </div>
  );
};

export default Home;
