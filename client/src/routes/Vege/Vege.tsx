import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import Title from '../../utils/title';
import { ProductInterface } from '../../typings';
import axios from 'axios';

const Vege = () => {
  const [vegeDishes, setVegeDishes] = useState<ProductInterface[]>([]);
  const { title, setTitle } = Title();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setVegeDishes(response.data);
        setTitle('Vege dishes');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={vegeDishes} title={title}></RouteLayout>;
};

export default Vege;
