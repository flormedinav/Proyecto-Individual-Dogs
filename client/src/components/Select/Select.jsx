import { useSelector, useDispatch } from "react-redux";
import {
  filterSelect,
  orderSelect,
  temperamentsSelect,
} from "../../redux/actions";
import styles from "./Select.module.css";

const Select = () => {
  let i = 1;
  const { temperaments } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterSelect(e.target.value));
    console.log(e.target.value);
  };

  const handleOrder = (e) => {
    dispatch(orderSelect(e.target.value));
    console.log(e.target.value);
  };

  const handleTemperaments = (e) => {
    dispatch(temperamentsSelect(e.target.value));
    console.log(e.target.value);
  };

  const removeFilterOrder = () => {
    dispatch(filterSelect(null));
    dispatch(orderSelect(null));
    dispatch(temperamentsSelect(null));

    const filterSelectValue = document.getElementById("filterSelect");
    const orderSelectValue = document.getElementById("orderSelect");
    const temperamentSelectValue = document.getElementById("temperamentSelect");

    filterSelectValue.value = "";
    orderSelectValue.value = "";
    temperamentSelectValue.value = "";
  };

  return (
    <div className={styles.container}>
      {/* Filtro temperaments */}
      <div className={styles.divTemperaments}>
        <h3 className={styles.titleFilterOrder}>Temperaments</h3>
        <select
          id="temperamentSelect"
          className={styles.selectTemperaments}
          onChange={handleTemperaments}
          defaultValue=""
        >
          <option disabled="disabled" value="">
            -
          </option>
          {temperaments.map((temp) => (
            <option key={i++} value={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.divFilter}>
        <h3 className={styles.titleFilterOrder}>Filter</h3>
        <select
          onChange={handleFilter}
          className={styles.selectFilter}
          id="filterSelect"
          defaultValue=""
        >
          <option disabled="disabled" value="">
            -
          </option>
          {/* <option value="">All</option> */}
          <option value="createdInDb">Data Base</option>
          <option value="originApi">Api</option>
        </select>
      </div>

      {/* Ordenamiento */}
      <div className={styles.divOrder}>
        <h3 className={styles.titleFilterOrder}>Sort</h3>
        <select
          onChange={handleOrder}
          className={styles.selectOrder}
          id="orderSelect"
          defaultValue=""
        >
          <option disabled="disabled" value="">
            -
          </option>
          {/* <option value="">All</option> */}
          <option value="upward">A - Z</option>
          <option value="descendant">Z - A</option>
          <option value="weightMin">Less weight</option>
          <option value="weightMax">May weight</option>
        </select>
      </div>

      <button onClick={removeFilterOrder} className={styles.buttonRemoveFilter}>
        Remove
      </button>
    </div>
  );
};

export default Select;
