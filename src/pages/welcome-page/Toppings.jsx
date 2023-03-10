import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Toppings = () => {
  const [soslar, setSoslar] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3030/soslar')
      .then((res) => {
        setSoslar(res.data);
      })
      .catch((err) => {
        //! TODO
      });
  }, []);

  const handleChange = (e, sos) => {
    const filtred = sepet.filter((i) => i.name !== sos.name);

    e.target.checked ? setSepet([...sepet, sos]) : setSepet(filtred);
  };

  return (
    <div className="container text-start my-5">
      <h1>Toppings</h1>
      <p>Price 2$</p>
      <h2>Total: {sepet.length * 2} $</h2>
      <div className="row gap-3">
        {soslar.map((sos) => (
          <div
            key={sos.name}
            className="d-flex flex-column align-items-center"
            style={{ width: '150px' }}
          >
            <img src={sos.imagePath} className="w-100" alt="" />
            <label htmlFor={sos.name} className="text-nowrap">
              {sos.name}
            </label>
            <input
              id={sos.name}
              type="checkbox"
              onChange={(e) => handleChange(e, sos)}
              className="form-check-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;