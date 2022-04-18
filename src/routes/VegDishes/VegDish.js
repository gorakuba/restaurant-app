import React from "react";
import { Container, Content } from "../../utilities/Main.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import { dishes } from "../../routes/VegDishes/dishes";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";
import { motion } from "framer-motion";

function VegDish() {
  return (
    <>
      <Header />
      <Container color={color}>
        <Sidebar />

        <Content color={color} font={font}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h1>Dania wege:</h1>
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

export default VegDish;
