import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import { ProductInterface } from '../../typings';

const Pizza = () => {
  const [pizzas, setPizzas] = useState<ProductInterface[]>([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    fetch('/pizzas')
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setGroup('Pizzas');
      });
  }, []);

  return <RouteLayout products={pizzas} group={group}></RouteLayout>;
};

export default Pizza;
