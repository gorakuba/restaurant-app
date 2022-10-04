import { useState } from 'react';

import {
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
  Counter,
  Plus,
  Name,
} from './Product.styled';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { ProductInterface } from '../../typings';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/ProductSlice';
import {
  showProductDetails,
  removeProductFromBasket,
  addToBasketIfProductExist,
} from '../../slices/ProductSlice';

const Product = ({ id, name, description, price, count }: ProductInterface) => {
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const basketAdd = () => {
    dispatch(addToBasket({ id, name, description, price, count }));

    setClicked(true);
    setCounter((current: number) => (current += 1));
  };

  const basketAddIfExist = () => {
    dispatch(
      addToBasketIfProductExist({ id, name, description, price, count })
    );

    setCounter((current: number) => (current += 1));
  };

  const basketRemove = () => {
    if (counter > 0) {
      dispatch(
        removeProductFromBasket({ id, name, description, price, count })
      );

      setCounter((current: number) => (current -= 1));
    } else {
      setCounter(0);
    }
  };

  return (
    <ProductStyle>
      <HeaderLine>
        <Name
          onClick={() =>
            dispatch(
              showProductDetails({ id, name, description, price, count })
            )
          }
        >
          {name}
        </Name>

        <Price>Price: {price} zł</Price>

        <AddSection>
          {clicked && counter > 0 ? (
            <Counter>
              <AddIcon onClick={basketAddIfExist} />
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
