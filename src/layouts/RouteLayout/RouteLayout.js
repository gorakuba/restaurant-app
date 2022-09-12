import React from 'react';

import Product from '../../components/Product/Product';
import { Container, Content } from '../../styles/main.styled';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

import { motion } from 'framer-motion';

const RouteLayout = ({ products, title }) => {
  return (
    <>
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h1> {title}:</h1>
          </motion.div>

          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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

        {products.map((product) => (
          <ProductDetail
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </Container>
    </>
  );
};

export default RouteLayout;
