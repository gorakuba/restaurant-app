import React, { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout/RouteLayout';
import TitleLogic from '../../utils/TitleLogic';

import axios from 'axios';

const Special = () => {
  const [specials, setSpecials] = useState([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then((response) => {
        setSpecials(response.data);
        setTitle('Specials of the days');
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <RouteLayout products={specials} title={title}></RouteLayout>
    </>
  );
};

export default Special;
