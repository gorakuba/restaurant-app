import { useState } from 'react';

import {
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
  Counter,
  Plus,
  Name,
  ProductImage,
} from './Product.styled';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { ProductInterface } from '../../typings';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/ProductSlice';
import {
  showProductDetails,
  removeProductFromBasket,
} from '../../slices/ProductSlice';

const Product = ({
  id,
  name,
  description,
  price,
  count,
  photoSrc,
}: ProductInterface) => {
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const basketAdd = () => {
    dispatch(addToBasket({ id, name, description, price, count, photoSrc }));

    setClicked(true);
    setCounter((current: number) => (current += 1));
  };

  const basketRemove = () => {
    if (counter > 0) {
      dispatch(
        removeProductFromBasket({
          id,
          name,
          description,
          price,
          count,
          photoSrc,
        })
      );

      setCounter((current: number) => (current -= 1));
    } else {
      setCounter(0);
    }
  };

  return (
    <ProductStyle>
      <ProductImage>
        <img src={photoSrc} alt={name} />
      </ProductImage>
      <HeaderLine>
        <Name
          onClick={() =>
            dispatch(
              showProductDetails({
                id,
                name,
                description,
                price,
                count,
                photoSrc,
              })
            )
          }
        >
          {name}
        </Name>

        <Price>Price: {price} zł</Price>

        <AddSection>
          {clicked && counter > 0 ? (
            <Counter>
              <AddIcon onClick={basketAdd} />
              {counter}
              <RemoveIcon onClick={basketRemove} />
            </Counter>
          ) : (
            <Plus onClick={basketAdd}>Add to basket</Plus>
          )}
        </AddSection>
      </HeaderLine>
    </ProductStyle>
  );
};

export default Product;
