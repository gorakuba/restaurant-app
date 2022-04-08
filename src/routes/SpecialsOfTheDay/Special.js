import React from "react";
import { Container, Content } from "./Special.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../routes/SpecialsOfTheDay/dishes";

const Special = () => {
  return (
    <>
      <Header />
      <Container color>
        <Sidebar />
        <Content color font>
          <h1>Dania dnia:</h1>
          {dishes.map((dish) => (
            <Product
              key={dishes.indexOf(dish)}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Special;
