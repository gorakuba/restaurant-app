import React, { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout/RouteLayout';
import TitleLogic from '../../utils/TitleLogic';

import axios from 'axios';

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setPizzas(response.data);
        setTitle('Pizzas');
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={pizzas} title={title}></RouteLayout>
    </>
  );
};

export default Pizza;
