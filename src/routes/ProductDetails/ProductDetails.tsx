import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Style,
  ProductDetailImage,
  PlusButton,
  ProductDetailsHeader,
} from './ProductDetails.styled';
import { motion } from 'framer-motion';
import { ProductInterface } from '../../typings';
import axios from 'axios';

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductInterface>();
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get<ProductInterface>(`http://localhost:3001/dishes/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <Style>
        <ProductDetailImage>
          <img src={product?.photoSrc} alt={product?.name} />
        </ProductDetailImage>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <ProductDetailsHeader>
              <div>
                <h2>{product?.name}</h2>
                <h3>Price: {product?.price} zł</h3>
              </div>
              <PlusButton>Add to basket</PlusButton>
            </ProductDetailsHeader>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <p>{product?.description}</p>
          </motion.div>
        </div>
      </Style>
    </motion.div>
  );
};

export default ProductDetails;
