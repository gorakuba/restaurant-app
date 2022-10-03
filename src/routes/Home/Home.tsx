import { Link } from 'react-router-dom';

import { Container, Content, StartShopButton } from './Home.styled';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Content>
          <h1>Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            libero placerat lectus ultricies placerat. Cras eros mi, vestibulum
            id arcu in, vehicula porta velit. Nunc ut nisi congue, ornare diam
            ut, pellentesque turpis. Maecenas faucibus massa neque, vel mattis
            magna malesuada quis. Nam nec lectus massa. Sed pharetra at urna eu
            fringilla.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to='/specialsoftheday'>
              <StartShopButton>Start make your order</StartShopButton>
            </Link>
          </motion.div>
        </Content>
      </motion.div>
    </Container>
  );
};

export default Home;
