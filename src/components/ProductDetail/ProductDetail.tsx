import {
  Style,
  NoProductSelected,
  ProductDetails,
  CloseIconDiv,
} from './ProductDetail.styled';

import { AnimatePresence, motion } from 'framer-motion';

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { hideProductDetails } from '../../slices/ProductSlice';
import { ProductInterface } from '../../typings';

const ProductDetail = () => {
  const details = useSelector((state: RootState) => state.product.details);
  const dispatch = useDispatch();

  return (
    <>
      {details.length > 0 ? (
        <AnimatePresence>
          {details?.map((detail: ProductInterface) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              key={detail.id}
            >
              <Style>
                <ProductDetails>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <h2>{detail.name}</h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <h3>Price: {detail.price}zł</h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <p>{detail.description}</p>
                  </motion.div>
                </ProductDetails>

                <CloseIconDiv>
                  <CloseIcon onClick={() => dispatch(hideProductDetails())} />
                </CloseIconDiv>
              </Style>
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <NoProductSelected>
            <p>choose one product to see his details ... </p>
          </NoProductSelected>
        </motion.div>
      )}
    </>
  );
};

export default ProductDetail;
