import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const MeatDish = () => {
  const [meatDishes, setMeatDishes] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/meat-dishes')
      .then((response) => response.json())
      .then((data) => {
        setMeatDishes(data);
        setGroup('Meat dishes');
      });
  }, []);

  return <RouteLayout products={meatDishes} group={group}></RouteLayout>;
};

export default MeatDish;
