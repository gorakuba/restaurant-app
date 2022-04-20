import React from "react";
import { Container, Content } from "../../styles/main.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../utilities/dishes";
import { motion } from "framer-motion";

function Drink() {
  return (
    <>
      <Header />
      <Container color>
        <Sidebar />

        <Content color font>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h1>Napoje:</h1>
          </motion.div>

          {dishes.map((dish) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, marginTop: 40 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <Product
                key={dish.id}
                name={dish.name}
                price={dish.price}
                description={dish.description}
              />
            </motion.div>
          ))}
        </Content>
      </Container>
    </>
  );
}

export default Drink;
