import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const Vege = () => {
  const [vege, setVege] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/vege-dishes')
      .then((response) => response.json())
      .then((data) => {
        setVege(data);
        setGroup('Vege dishes');
      });
  }, []);

  return <RouteLayout products={vege} group={group}></RouteLayout>;
};

export default Vege;
