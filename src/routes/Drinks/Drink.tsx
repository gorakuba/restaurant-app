import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const Drink = () => {
  const [drinks, setDrinks] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/drinks')
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
        setGroup('Drinks');
      });
  }, []);

  return <RouteLayout products={drinks} group={group}></RouteLayout>;
};

export default Drink;
