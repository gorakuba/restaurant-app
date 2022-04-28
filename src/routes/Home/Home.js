import React from "react";

//components
import Header from "../../components/Header/Header";

//styled components
import { Container, Content, Button } from "./Home.styled";

//react router
import { Link } from "react-router-dom";

//framer motion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />

      <motion.div
        initial={{ opacity: 0, marginLeft: -200 }}
        animate={{ opacity: 1, marginLeft: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Container>
          <Content>
            <h1>Welcome to our restaurant page!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              libero placerat lectus ultricies placerat. Cras eros mi,
              vestibulum id arcu in, vehicula porta velit. Nunc ut nisi congue,
              ornare diam ut, pellentesque turpis. Maecenas faucibus massa
              neque, vel mattis magna malesuada quis. Nam nec lectus massa. Sed
              pharetra at urna eu fringilla.
            </p>

            <motion.div
              initial={{ opacity: 0, marginLeft: -200 }}
              animate={{ opacity: 1, marginLeft: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            >
              <Link to='/specialsoftheday'>
                <Button>Start make your order</Button>
              </Link>
            </motion.div>
          </Content>
        </Container>
      </motion.div>
    </>
  );
};

export default Home;
