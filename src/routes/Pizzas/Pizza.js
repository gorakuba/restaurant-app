import React, { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout/RouteLayout';

import axios from 'axios';

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={pizzas}></RouteLayout>
    </>
  );
};

export default Pizza;
