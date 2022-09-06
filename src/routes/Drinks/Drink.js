import React, { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout/RouteLayout';
import TitleLogic from '../../utils/TitleLogic';

import axios from 'axios';

const Drink = () => {
  const [drinks, setDrinks] = useState([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setDrinks(response.data);
        setTitle('Drinks');
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={drinks} title={title}></RouteLayout>
    </>
  );
};

export default Drink;
