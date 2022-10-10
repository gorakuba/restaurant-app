import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import Title from '../../utils/title';
import { ProductInterface } from '../../typings';
import axios from 'axios';

const MeatDish = () => {
  const [meatDishes, setMeatDishes] = useState<ProductInterface[]>([]);
  const { title, setTitle } = Title();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setMeatDishes(response.data);
        setTitle('Meat dishes');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={meatDishes} title={title}></RouteLayout>;
};

export default MeatDish;
