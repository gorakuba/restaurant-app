import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import Title from '../../utils/title';
import { ProductInterface } from '../../typings';
import axios from 'axios';

const Drink = () => {
  const [drinks, setDrinks] = useState<ProductInterface[]>([]);
  const { title, setTitle } = Title();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setDrinks(response.data);
        setTitle('Drinks');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={drinks} title={title}></RouteLayout>;
};

export default Drink;
