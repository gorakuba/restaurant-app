import React from "react";
import { Container, Content } from "./Drink.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../routes/Drinks/dishes";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";

function Drink() {
  return (
    <>
      <Header />
      <Container color={color}>
        <Sidebar />
        <Content color={color} font={font}>
          <h1>Napoje:</h1>
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

export default Drink;
