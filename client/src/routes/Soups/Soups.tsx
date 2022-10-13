import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const Soup = () => {
  const [soups, setSoups] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/soups')
      .then((response) => response.json())
      .then((data) => {
        setSoups(data);
        setGroup('Soups');
      });
  }, []);

  return <RouteLayout products={soups} group={group}></RouteLayout>;
};

export default Soup;
