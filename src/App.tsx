import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home';
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
  { id: 1, path: '', element: <Home /> },
  { id: 2, path: 'deliveryandcontact', element: <DeliveryContact /> },
  { id: 3, path: 'drinks', element: <Drink /> },
  { id: 4, path: 'fastfoods', element: <FastFood /> },
  { id: 5, path: 'meatdishes', element: <MeatDish /> },
  { id: 6, path: 'pizzas', element: <Pizza /> },
  { id: 7, path: 'soups', element: <Soup /> },
  { id: 8, path: 'specialsoftheday', element: <Special /> },
  { id: 9, path: 'vegdishes', element: <VegDish /> },
  { id: 10, path: 'basket', element: <Basket /> },
  { id: 11, path: 'checkout', element: <Checkout /> },
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
