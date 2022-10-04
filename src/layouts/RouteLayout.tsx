import Product from '../components/Product/Product';
import { Container, Content } from '../styles/main.styled';

import { motion } from 'framer-motion';
import { ProductInterface } from '../typings';

const RouteLayout = ({ products, title }) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2>{title}:</h2>
      </motion.div>

      <Content>
        {products.map((product: ProductInterface) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              count={product.count}
            />
          </motion.div>
        ))}
      </Content>
    </Container>
  );
};

export default RouteLayout;
