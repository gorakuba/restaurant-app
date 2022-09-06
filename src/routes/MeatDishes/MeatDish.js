import React, { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout/RouteLayout';
import TitleLogic from '../../utils/TitleLogic';

import axios from 'axios';

const MeatDish = () => {
  const [meatDishes, setMeatDishes] = useState([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setMeatDishes(response.data);
        setTitle('Meat dishes');
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={meatDishes} title={title}></RouteLayout>
    </>
  );
};

export default MeatDish;
