import { useEffect, useState } from 'react';

import RouteLayout from '../../layouts/RouteLayout';
import TitleLogic from '../../utils/title';
import { ProductInterface } from '../../typings';

import axios from 'axios';

const Soup = () => {
  const [soups, setSoups] = useState<ProductInterface[]>([]);
  const { title, setTitle } = TitleLogic();

  useEffect(() => {
    axios
      .get<ProductInterface[]>('http://localhost:3001/dishes')
      .then((response) => {
        setSoups(response.data);
        setTitle('Soups');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <RouteLayout products={soups} title={title}></RouteLayout>;
};

export default Soup;
