import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const Special = () => {
  const [specials, setSpecials] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/specials')
      .then((response) => response.json())
      .then((data) => {
        setSpecials(data);
        setGroup('Specials of the day');
      });
  }, []);

  return <RouteLayout products={specials} group={group}></RouteLayout>;
};

export default Special;
