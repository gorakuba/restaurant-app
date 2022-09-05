import React, { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout/RouteLayout';

import axios from 'axios';

const VegDish = () => {
  const [vegDishes, setVegDishes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setVegDishes(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={vegDishes}></RouteLayout>
    </>
  );
};

export default VegDish;
