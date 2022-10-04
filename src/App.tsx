import { Routes, Route } from 'react-router-dom';

import DeliveryContact from './routes/DeliveryContact/DeliveryContact';
import Drink from './routes/Drinks/Drink';
import FastFood from './routes/FastFoods/FastFoods';
import MeatDish from './routes/MeatDishes/MeatDishes';
import Pizza from './routes/Pizzas/Pizza';
import Soup from './routes/Soups/Soups';
import Special from './routes/Specials/Specials';
import VegDish from './routes/Vege/Vege';
import Basket from './routes/Basket/Basket';
import Checkout from './routes/Checkout/Checkout';

const paths = [
  { id: 1, path: 'deliveryandcontact', element: <DeliveryContact /> },
  { id: 2, path: 'drinks', element: <Drink /> },
  { id: 3, path: 'fastfoods', element: <FastFood /> },
  { id: 4, path: 'meatdishes', element: <MeatDish /> },
  { id: 5, path: 'pizzas', element: <Pizza /> },
  { id: 6, path: 'soups', element: <Soup /> },
  { id: 7, path: '/', element: <Special /> },
  { id: 8, path: 'vegdishes', element: <VegDish /> },
  { id: 9, path: 'basket', element: <Basket /> },
  { id: 10, path: 'checkout', element: <Checkout /> },
];

const MyApp = () => {
  return (
    <Routes>
      {paths?.map((path) => (
        <Route key={path.id} path={path.path} element={path.element} />
      ))}
    </Routes>
  );
};

export default MyApp;
