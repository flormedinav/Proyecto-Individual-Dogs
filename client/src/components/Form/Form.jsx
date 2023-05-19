import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validation from './validation';
import Loading from '../Loanding/Loading';
import {
  getTemperament,
  loadingPage,
  postDogs,
  getCreateImage,
} from '../../redux/actions';
import NewDog from '../NewDog/NewDog';
import styles from './Form.module.css';

const Form = () => {
  const { temperaments, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [createDogsForm, setCreateDogsForm] = useState({
    name: '',
    lifeSpanMin: '',
    lifeSpanMax: '',
    weightMin: '',
    weightMax: '',
    heightMin: '',
    heightMax: '',
    temperaments: [],
    image: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getTemp = async () => {
      dispatch(loadingPage(true));
      await dispatch(getTemperament());
      dispatch(loadingPage(false));
    };

    getTemp();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setErrors(
      validation({
        ...createDogsForm,
        [property]: value,
      })
    );

    setCreateDogsForm({
      ...createDogsForm,
      [property]: value,
    });
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    const alreadyAdded = createDogsForm.temperaments.includes(value);

    if (alreadyAdded) {
      alert('El temperamento ya ha sido agregado');
      return;
    }

    if (createDogsForm.temperaments.length > 5) {
      alert('No se pueden agregar más temperamentos');
      return;
    }

    setErrors(
      validation({
        ...createDogsForm,
        temperaments: [...createDogsForm.temperaments, value],
      })
    );

    setCreateDogsForm({
      ...createDogsForm,
      temperaments: [...createDogsForm.temperaments, value],
    });
  };

  const temperamentForm = [...createDogsForm.temperaments];

  const removeTemperaments = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const updatedTemperaments = createDogsForm.temperaments.filter((temp) => {
      return temp !== value;
    });
    setCreateDogsForm({
      ...createDogsForm,
      temperaments: updatedTemperaments,
    });
  };

  const handleCreateImage = async (e) => {
    e.preventDefault();

    const image = await dispatch(getCreateImage());

    setCreateDogsForm({
      ...createDogsForm,
      image,
    });

    setErrors(
      validation({
        ...createDogsForm,
        image,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.lifeSpanMin &&
      !errors.lifeSpanMax &&
      !errors.weightMin &&
      !errors.weightMax &&
      !errors.heightMin &&
      !errors.heightMax &&
      !errors.temperaments &&
      !errors.image
    ) {
      dispatch(postDogs(createDogsForm));

      setCreateDogsForm({
        name: '',
        lifeSpanMin: '',
        lifeSpanMax: '',
        weightMin: '',
        weightMax: '',
        heightMin: '',
        heightMax: '',
        temperaments: [],
        image: '',
      });
      alert('Your dog has been created successfully');
    } else {
      alert('Something went wrong. Please try again');
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.containerGeneralForm}>
          <div className={styles.containerForm}>
            <h2 className={styles.titleForm}>Create new breed</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.divInputName}>
                <label htmlFor='name' className={styles.labelForm}>
                  Name
                </label>
                <input
                  className={styles.inputForm}
                  name='name'
                  value={createDogsForm.name}
                  type='text'
                  onChange={handleInputChange}
                />
                {errors.name && <p className={styles.errors}>{errors.name}</p>}
              </div>

              <div className={styles.divValueDoble}>
                <div className={styles.divInput}>
                  <label htmlFor='lifeSpanMin' className={styles.labelForm}>
                    Minimum life span
                  </label>
                  <input
                    className={styles.inputForm}
                    name='lifeSpanMin'
                    type='number'
                    value={createDogsForm.lifeSpanMin}
                    onChange={handleInputChange}
                  />
                  {errors.lifeSpanMin && (
                    <p className={styles.errors}>{errors.lifeSpanMin}</p>
                  )}
                </div>

                <div className={styles.divInput}>
                  <label htmlFor='lifeSpanMax' className={styles.labelForm}>
                    Maximum life span
                  </label>
                  <input
                    className={styles.inputForm}
                    name='lifeSpanMax'
                    type='number'
                    value={createDogsForm.lifeSpanMax}
                    onChange={handleInputChange}
                  />
                  {errors.lifeSpanMax && (
                    <p className={styles.errors}>{errors.lifeSpanMax}</p>
                  )}
                </div>

                <div className={styles.divInput}>
                  <label htmlFor='weightMin' className={styles.labelForm}>
                    Minimum weight
                  </label>
                  <input
                    className={styles.inputForm}
                    name='weightMin'
                    type='number'
                    value={createDogsForm.weightMin}
                    onChange={handleInputChange}
                  />
                  {errors.weightMin && (
                    <p className={styles.errors}>{errors.weightMin}</p>
                  )}
                </div>

                <div className={styles.divInput}>
                  <label htmlFor='weightMax' className={styles.labelForm}>
                    Maximum weight
                  </label>
                  <input
                    className={styles.inputForm}
                    type='number'
                    name='weightMax'
                    value={createDogsForm.weightMax}
                    onChange={handleInputChange}
                  />
                  {errors.weightMax && (
                    <p className={styles.errors}>{errors.weightMax}</p>
                  )}
                </div>

                <div className={styles.divInput}>
                  <label htmlFor='heightMin' className={styles.labelForm}>
                    Minimum height
                  </label>
                  <input
                    className={styles.inputForm}
                    type='number'
                    name='heightMin'
                    value={createDogsForm.heightMin}
                    onChange={handleInputChange}
                  />
                  {errors.heightMin && (
                    <p className={styles.errors}>{errors.heightMin}</p>
                  )}
                </div>

                <div className={styles.divInput}>
                  <label htmlFor='heightMax' className={styles.labelForm}>
                    Maximum height
                  </label>
                  <input
                    className={styles.inputForm}
                    type='number'
                    name='heightMax'
                    value={createDogsForm.heightMax}
                    onChange={handleInputChange}
                  />
                  {errors.heightMax && (
                    <p className={styles.errors}>{errors.heightMax}</p>
                  )}
                </div>
              </div>

              <div className={styles.divInputTemperaments}>
                <label htmlFor='temperament' className={styles.labelForm}>
                  Temperaments
                </label>
                <select
                  onChange={handleSelectChange}
                  className={styles.selectTemperaments}
                >
                  <option selected disabled>
                    -
                  </option>
                  {temperaments.map((temp) => (
                    <option value={temp.name}>{temp.name}</option>
                  ))}
                </select>
                {errors.temperaments && (
                  <p className={styles.errors}>{errors.temperaments}</p>
                )}
              </div>

              <div className={styles.divTemperamentsAdd}>
                {temperamentForm.map((tempForm) => (
                  <div className={styles.divButtonTemperamentsAdd}>
                    <button
                      className={styles.buttonTemperamentsAdd}
                      value={tempForm}
                      onClick={removeTemperaments}
                    >
                      x
                    </button>

                    <p>{tempForm}</p>
                  </div>
                ))}
              </div>

              <div className={styles.divInputButtonCreate}>
                <p className={styles.pCreateImage}>
                  Click the button below to generate an image of a dog
                </p>
                <button
                  className={styles.buttonCreateImage}
                  onClick={handleCreateImage}
                >
                  Generate image
                </button>
                {errors.image && (
                  <p className={styles.errors}>{errors.image}</p>
                )}
              </div>

              <input
                type='submit'
                value='Create'
                className={styles.buttonSubmit}
              />
            </form>
          </div>
          <NewDog
            name={createDogsForm.name}
            lifeSpanMin={createDogsForm.lifeSpanMin}
            lifeSpanMax={createDogsForm.lifeSpanMax}
            weightMin={createDogsForm.weightMin}
            weightMax={createDogsForm.weightMax}
            heightMin={createDogsForm.heightMin}
            heightMax={createDogsForm.heightMax}
            temperaments={createDogsForm.temperaments}
            image={createDogsForm.image}
          />
        </div>
      )}
    </div>
  );
};

export default Form;
