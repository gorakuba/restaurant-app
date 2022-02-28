import React from "react";
import { Container, Content } from "./MeatDish.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../routes/MeatDishes/dishes";

function MeatDish() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>
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

export default MeatDish;
