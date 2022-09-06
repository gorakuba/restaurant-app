import React, { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout/RouteLayout';
import TitleLogic from '../../utils/TitleLogic';

import axios from 'axios';

const VegDish = () => {
  const [vegDishes, setVegDishes] = useState([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setVegDishes(response.data);
        setTitle('Vege dishes');
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={vegDishes} title={title}></RouteLayout>
    </>
  );
};

export default VegDish;
