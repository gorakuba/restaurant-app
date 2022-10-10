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
import { productDetailsAnimations } from '../../utils/animations';

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const { productId } = useParams();
  console.log(product);

  useEffect(() => {
    fetch(`/drinks/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      {typeof product === undefined ? (
        <p>Loading...</p>
      ) : (
        <>
          {product.map((product) => (
            <motion.div {...productDetailsAnimations.productDetails}>
              <Style>
                <ProductDetailImage>
                  <img src={product.photoSrc} alt={product.name} />
                </ProductDetailImage>
                <div>
                  <motion.div {...productDetailsAnimations.header}>
                    <ProductDetailsHeader>
                      <div>
                        <h2>{product.name}</h2>
                        <h3>Price: {product.price} zł</h3>
                      </div>
                      <PlusButton>Add to basket</PlusButton>
                    </ProductDetailsHeader>
                  </motion.div>

                  <motion.div {...productDetailsAnimations.description}>
                    <p>{product.description}</p>
                  </motion.div>
                </div>
              </Style>
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};

export default ProductDetails;
