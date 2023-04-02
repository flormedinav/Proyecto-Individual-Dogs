import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pagePaginado } from "../../redux/actions";
import previusImage from "../../images/next.png";
import previusTotalImage from "../../images/next total.png";
import nextImage from "../../images/previus.png";
import nextTotalImage from "../../images/previus total.png";
import styles from "./Paginado.module.css";

const Paginado = () => {
  const { amountPages, page } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [visibleButtons, setVisibleButtons] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handlePaginado = (e) => {
    const number = e.target.value;
    dispatch(pagePaginado(number));
    setActivePage(parseInt(number));
  };

  const handlePrev = () => {
    if (parseInt(page) > 1) {
      const previusPage = parseInt(page) - 1;
      dispatch(pagePaginado(previusPage));
      setActivePage(previusPage);
    }
  };

  const handleNext = () => {
    if (parseInt(page) < parseInt(amountPages)) {
      const nextPage = parseInt(page) + 1;
      dispatch(pagePaginado(nextPage));
      setActivePage(nextPage);
    }
  };

  const handleInitial = () => {
    dispatch(pagePaginado(1));
    setActivePage(1);
  };

  const handleEnd = () => {
    dispatch(pagePaginado(amountPages));
    setActivePage(amountPages);
  };

  const updateVisibleButtons = () => {
    const buttons = [];

    //Primer botón
    let start = page - 2;
    if (start < 1) {
      start = 1;
    }

    //Botón final
    let end = start + 4;
    if (end > amountPages) {
      end = amountPages;
      start = end - 4;

      if (start < 1) {
        start = 1;
      }
    }

    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }
    setVisibleButtons(buttons);
  };

  useEffect(() => {
    updateVisibleButtons();
  }, [page, amountPages]);

  return (
    <div className={styles.container}>
      <button
        onClick={handleInitial}
        className={`${styles.buttonsInitial} ${
          page === activePage ? styles.active : ""
        }`}
      >
        <img src={previusTotalImage} alt="Initial" />
      </button>
      <button
        onClick={handlePrev}
        className={`${styles.buttonPrevius} ${
          page === activePage ? styles.active : ""
        }`}
      >
        <img src={previusImage} alt="Previus" />
      </button>
      {visibleButtons.map((page) => (
        <button
          key={page}
          value={page}
          onClick={handlePaginado}
          className={`${styles.buttonsNumber}  
          ${
            page === 1 && activePage === 1
              ? styles.activePage
              : styles.buttonsNumber
          } 
          ${page === activePage ? styles.activePage : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        className={`${styles.buttonNext} ${
          page === activePage ? styles.active : ""
        }`}
      >
        <img src={nextImage} alt="Next" />
      </button>
      <button
        onClick={handleEnd}
        className={`${styles.buttonsEnd} ${
          page === activePage ? styles.active : ""
        }`}
      >
        <img src={nextTotalImage} alt="End" />
      </button>
    </div>
  );
};

export default Paginado;
