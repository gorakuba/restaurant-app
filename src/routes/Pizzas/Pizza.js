import React from "react";
import { Container, Content } from "./Pizza.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../routes/Pizzas/dishes";

function Pizza() {
  return (
    <>
      <Header />
      <Container color>
        <Sidebar />
        <Content color font>
          <h1>Pizza:</h1>
          {dishes.map((dish) => (
            <Product
              key={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </Content>
      </Container>
    </>
  );
}

export default Pizza;
