import React, { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout/RouteLayout';

import axios from 'axios';

const Special = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setSpecials(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={specials}></RouteLayout>
    </>
  );
};

export default Special;
