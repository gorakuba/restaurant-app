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
import { productDetailsAnimations } from '../../utils/animations';

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
    <motion.div {...productDetailsAnimations.productDetails}>
      <Style>
        <ProductDetailImage>
          <img src={product?.photoSrc} alt={product?.name} />
        </ProductDetailImage>
        <div>
          <motion.div {...productDetailsAnimations.header}>
            <ProductDetailsHeader>
              <div>
                <h2>{product?.name}</h2>
                <h3>Price: {product?.price} zł</h3>
              </div>
              <PlusButton>Add to basket</PlusButton>
            </ProductDetailsHeader>
          </motion.div>

          <motion.div {...productDetailsAnimations.description}>
            <p>{product?.description}</p>
          </motion.div>
        </div>
      </Style>
    </motion.div>
  );
};

export default ProductDetails;
