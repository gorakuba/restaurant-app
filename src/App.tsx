import { Routes, Route } from 'react-router-dom';

import Location from './routes/Location/Location';
import Drink from './routes/Drinks/Drink';
import FastFood from './routes/FastFoods/FastFoods';
import MeatDish from './routes/MeatDishes/MeatDishes';
import Pizza from './routes/Pizzas/Pizza';
import Soup from './routes/Soups/Soups';
import Special from './routes/Specials/Specials';
import VegDish from './routes/Vege/Vege';
import Basket from './routes/Basket/Basket';
import Checkout from './routes/Checkout/Checkout';
import ProductDetails from './routes/ProductDetails/ProductDetails';

const paths = [
  { id: 1, path: 'location', element: <Location /> },
  { id: 2, path: 'drinks', element: <Drink /> },
  { id: 3, path: 'drinks/:productId', element: <ProductDetails /> },
  { id: 4, path: 'fastfoods', element: <FastFood /> },
  { id: 5, path: 'fastfoods/:productId', element: <ProductDetails /> },
  { id: 6, path: 'meatdishes', element: <MeatDish /> },
  {
    id: 7,
    path: 'meatdishes/:productName',
    element: <ProductDetails />,
  },
  { id: 8, path: 'pizzas', element: <Pizza /> },
  { id: 9, path: 'pizzas/:productId', element: <ProductDetails /> },
  { id: 10, path: 'soups', element: <Soup /> },
  { id: 11, path: 'soups/:productId', element: <ProductDetails /> },
  { id: 12, path: '/', element: <Special /> },
  {
    id: 13,
    path: '/specialsofthedays/:productId',
    element: <ProductDetails />,
  },
  { id: 14, path: 'vegedishes', element: <VegDish /> },
  { id: 15, path: 'vegedishes/:productId', element: <ProductDetails /> },
  { id: 16, path: 'basket', element: <Basket /> },
  { id: 17, path: 'checkout', element: <Checkout /> },
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
