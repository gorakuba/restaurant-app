import React, { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout/RouteLayout';

import axios from 'axios';

const MeatDish = () => {
  const [meatDishes, setMeatDishes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setMeatDishes(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={meatDishes}></RouteLayout>
    </>
  );
};

export default MeatDish;
