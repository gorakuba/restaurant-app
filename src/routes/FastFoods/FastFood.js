import React, { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout/RouteLayout';

import axios from 'axios';

const FastFood = () => {
  const [fastFoods, setFastFoods] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setFastFoods(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={fastFoods}></RouteLayout>
    </>
  );
};

export default FastFood;
