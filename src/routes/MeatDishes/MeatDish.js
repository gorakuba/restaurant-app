import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import HeaderLogic from "../../components/Header/HeaderLogic";

import {
  Container,
  Content,
  NotLogged,
  LoginButton,
} from "../../styles/main.styled";

import { dishes } from "../../resources/dishes";
import { motion } from "framer-motion";

const MeatDish = () => {
  const { check } = HeaderLogic();

  return (
    <>
      <Header />

      {check === false ? (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <NotLogged>You are not logged in!</NotLogged>
          <Link to='/login'>
            <LoginButton>Login</LoginButton>
          </Link>
        </motion.div>
      ) : (
        <Container>
          <Sidebar />

          <Content>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <h1>Dania mięsne:</h1>
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
      )}
    </>
  );
};

export default MeatDish;
