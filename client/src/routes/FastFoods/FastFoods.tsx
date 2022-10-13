import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const FastFood = () => {
  const [fastFoods, setFastFoods] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/fast-foods')
      .then((response) => response.json())
      .then((data) => {
        setFastFoods(data);
        setGroup('Fast foods');
      });
  }, []);

  return <RouteLayout products={fastFoods} group={group}></RouteLayout>;
};

export default FastFood;
