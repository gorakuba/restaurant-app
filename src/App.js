import React from "react";

//react router
import { Routes, Route } from "react-router-dom";

//routes
import Home from "./routes/Home/Home";
import DeliveryContact from "./routes/DeliveryAndContact/DeliveryContact";
import Drink from "./routes/Drinks/Drink";
import FastFood from "./routes/FastFoods/FastFood";
import MeatDish from "./routes/MeatDishes/MeatDish";
import Pizza from "./routes/Pizzas/Pizza";
import Soup from "./routes/Soups/Soup";
import Special from "./routes/SpecialsOfTheDay/Special";
import VegDish from "./routes/VegDishes/VegDish";
import Basket from "./routes/Basket/Basket";
import Login from "./routes/Login/Login";
import Reservation from "./routes/Reservation/Reservation";
import Register from "./routes/Register/Register";
import Checkout from "./routes/Checkout/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='deliveryandcontact' element={<DeliveryContact />} />
        <Route path='drinks' element={<Drink />} />
        <Route path='fastfoods' element={<FastFood />} />
        <Route path='meatdishes' element={<MeatDish />} />
        <Route path='pizzas' element={<Pizza />} />
        <Route path='soups' element={<Soup />} />
        <Route path='specialsoftheday' element={<Special />} />
        <Route path='vegdishes' element={<VegDish />} />
        <Route path='basket' element={<Basket />} />
        <Route path='login' element={<Login />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
