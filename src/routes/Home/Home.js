import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import HeaderLogic from "../../components/Header/HeaderLogic";

import {
  Container,
  Content,
  StartShopButton,
  LoginButton,
} from "./Home.styled";

import { motion } from "framer-motion";
import { users } from "../../resources/users";

const Home = () => {
  const { check } = HeaderLogic();

  return (
    <>
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Container>
          <Content>
            <h1>
              Welcome!
              {check === false ? (
                " You are not logged in!"
              ) : (
                <>
                  {users.map((user) =>
                    user.loginStatus === true
                      ? ` You are logged in as ${user.name}!`
                      : null
                  )}
                </>
              )}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              libero placerat lectus ultricies placerat. Cras eros mi,
              vestibulum id arcu in, vehicula porta velit. Nunc ut nisi congue,
              ornare diam ut, pellentesque turpis. Maecenas faucibus massa
              neque, vel mattis magna malesuada quis. Nam nec lectus massa. Sed
              pharetra at urna eu fringilla.
            </p>

            {check === false ? (
              <Link to='/login'>
                <LoginButton>Login</LoginButton>
              </Link>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to='/specialsoftheday'>
                  <StartShopButton>Start make your order</StartShopButton>
                </Link>
              </motion.div>
            )}
          </Content>
        </Container>
      </motion.div>
    </>
  );
};

export default Home;
