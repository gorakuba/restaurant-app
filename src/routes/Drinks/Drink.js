import React from "react";

//components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";

//styled components
import { Container, Content } from "../../styles/main.styled";

//drinks
import { dishes } from "../../resources/dishes";

//framer motion
import { motion } from "framer-motion";

const Drink = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />

        <Content>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h1>Napoje:</h1>
          </motion.div>

          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, marginTop: 40 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <Product
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
};

export default Drink;
