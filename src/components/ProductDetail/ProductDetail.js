import React from 'react';

import { Style } from './ProductDetail.styled';
import { useStateValue } from '../../helper/StateProvider/StateProvider';

const ProductDetail = ({ id, name, description, price }) => {
  const [{ details }, dispatch] = useStateValue();

  return (
    <>
      {details.map((detail) => (
        <Style>{detail.name}</Style>
      ))}
    </>
  );
};

export default ProductDetail;
