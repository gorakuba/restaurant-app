import { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout';
import TitleLogic from '../../utils/title';
import { ProductInterface } from '../../typings';

import axios from 'axios';

const FastFood = () => {
  const [fastFoods, setFastFoods] = useState<ProductInterface[]>([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setFastFoods(response.data);
        setTitle('Fast foods');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={fastFoods} title={title}></RouteLayout>;
};

export default FastFood;
