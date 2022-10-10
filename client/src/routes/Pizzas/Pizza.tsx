import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import Title from '../../utils/title';
import { ProductInterface } from '../../typings';
import axios from 'axios';

const Pizza = () => {
  const [pizzas, setPizzas] = useState<ProductInterface[]>([]);
  const { title, setTitle } = Title();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setPizzas(response.data);
        setTitle('Pizzas');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={pizzas} title={title}></RouteLayout>;
};

export default Pizza;
