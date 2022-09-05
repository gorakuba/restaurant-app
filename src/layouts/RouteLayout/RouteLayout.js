import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import { Container, Content } from '../../styles/main.styled';

import { motion } from 'framer-motion';

const RouteLayout = ({ products }) => {
  return (
    <>
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

          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, marginTop: 40 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <Product
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </motion.div>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default RouteLayout;
