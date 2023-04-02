import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { filterSelect, orderSelect, nameSearch } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
import logoImage from "../../images/LOGO.png";
import menuImage from "../../images/menu2.png";
import cerrarMenuImage from "../../images/cerrar.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isNavActive, setIsNavActive] = useState(false);

  const handleRedirectPage = async () => {
    dispatch(nameSearch(null));
    dispatch(filterSelect(null));
    dispatch(orderSelect(null));
  };

  const toggleNav = () => {
    //Sea a lo contrario del valor de isNavActive
    setIsNavActive(!isNavActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/home">
          <img src={logoImage} alt="Logo Dogs" className={styles.logoImage} />
        </Link>
      </div>
      <div
        className={`${styles.containerNav} ${isNavActive ? styles.active : ""}`}
      >
        <button onClick={toggleNav} className={styles.menuButton}>
          {!isNavActive ? (
            <img src={menuImage} alt="Menu" className={styles.menuImg} />
          ) : (
            <img
              src={cerrarMenuImage}
              alt="Close"
              className={styles.closeMenuImg}
            />
          )}
        </button>

        <div
          className={`${styles.buttonsNav} ${isNavActive ? styles.active : ""}`}
        >
          <Link
            to="/home"
            onClick={handleRedirectPage}
            className={styles.buttonHome}
          >
            Home
          </Link>

          <Link to="/about" className={styles.buttonAbout}>
            About
          </Link>

          <Link to="/form" className={styles.buttonCreate}>
            Create New Dog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
