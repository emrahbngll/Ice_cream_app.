import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3030/cesitler')
      .then((res) => {
        setCesitler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Sifirlama islemi

  const handleReset = (param) => {
    const reseted = sepet.filter((i) => i.name !== param.name);
    setSepet(reseted);
  }

  //Adet bulma fonk

  const findAmound = (param) => {
    const bulundu = sepet.filter((i) => i.name === param.name);
    return bulundu.length;
  }
  return (
    <div className="container">
      <h1 className="text-start">ICE CREAM</h1>
      <p className="text-start">Price 3$</p>
      <h2 className="text-start">Total:  {sepet.length *3} $</h2>
      <div className="row mt-4 d-flex gap-5 p-3 justify-content-between">
        {cesitler.map((cesit) => {
          const adet = findAmound(cesit);
          return (
           <Card 
           cesit={cesit}
           findAmound={findAmound}
           handleReset={handleReset}
           adet={adet}
           sepet={sepet}
           setSepet={setSepet}
           />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;
