import { useEffect, useState } from 'react';
import RouteLayout from '../../layouts/RouteLayout';
import Title from '../../utils/title';
import { ProductInterface } from '../../typings';

const Drink = () => {
  const [drinks, setDrinks] = useState<ProductInterface[]>([]);
  const { title, setTitle } = Title();

  useEffect(() => {
    fetch('/drinks')
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
        setTitle('Drinks');
      });
  }, []);

  return (
    <>
      {typeof drinks === undefined ? (
        <p>Loading...</p>
      ) : (
        <RouteLayout products={drinks} title={title}></RouteLayout>
      )}
    </>
  );
};

export default Drink;
