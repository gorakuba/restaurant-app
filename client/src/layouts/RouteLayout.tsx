import Product from '../components/Product/Product';
import { Container, Content } from '../styles/main.styled';
import { motion } from 'framer-motion';
import { ProductInterface } from '../typings';
import { routeLayoutAnimations } from '../utils/animations';

const RouteLayout = ({ products, title }) => {
  return (
    <Container>
      <motion.div {...routeLayoutAnimations.layout}>
        <h2>{title}</h2>
      </motion.div>

      <Content>
        {products.map((product: ProductInterface) => (
          <motion.div key={product.id} {...routeLayoutAnimations.layoutProduct}>
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              count={product.count}
              photoSrc={product.photoSrc}
              title={title}
            />
          </motion.div>
        ))}
      </Content>
    </Container>
  );
};

export default RouteLayout;
