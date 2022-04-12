import React from "react";
import { Container, Content } from "./VegDish.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../routes/VegDishes/dishes";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";

function VegDish() {
  return (
    <>
      <Header />
      <Container color={color}>
        <Sidebar />
        <Content color={color} font={font}>
          <h1>Dania wege:</h1>
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

export default VegDish;
