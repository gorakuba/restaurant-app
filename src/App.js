import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home';
import DeliveryContact from './routes/DeliveryAndContact/DeliveryContact';
import Drink from './routes/Drinks/Drink';
import FastFood from './routes/FastFoods/FastFood';
import MeatDish from './routes/MeatDishes/MeatDish';
import Pizza from './routes/Pizzas/Pizza';
import Soup from './routes/Soups/Soup';
import Special from './routes/SpecialsOfTheDay/Special';
import VegDish from './routes/VegDishes/VegDish';
import Basket from './routes/Basket/Basket';
import Reservation from './routes/Reservation/Reservation';
import Checkout from './routes/Checkout/Checkout';

export const paths = [
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
  { id: 11, path: 'reservation', element: <Reservation /> },
  { id: 12, path: 'checkout', element: <Checkout /> },
];

const App = () => {
  return (
    <>
      <Routes>
        {paths?.map((path) => (
          <Route key={path.id} path={path.path} element={path.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
