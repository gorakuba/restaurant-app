import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import Title from '../../utils/title';
import { ProductInterface } from '../../typings';
import axios from 'axios';

const Special = () => {
  const [specials, setSpecials] = useState<ProductInterface[]>([]);
  const { title, setTitle } = Title();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setSpecials(response.data);
        setTitle('Specials of the days');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={specials} title={title}></RouteLayout>;
};

export default Special;
