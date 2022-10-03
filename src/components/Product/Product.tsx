import { useState } from 'react';

import {
  Description,
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
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../slices/ProductSlice';
import { RootState } from '../../store';

const Product = ({ id, name, description, price, count }: ProductInterface) => {
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  const basket = useSelector((state: RootState) => state.product.basket);
  const dispatch = useDispatch();

  // const counterPlus = () => {
  //   if (counter === 0) {
  //     dispatch({
  //       type: 'ADD_TO_BASKET',
  //       product: {
  //         id: id,
  //         name: name,
  //         price: price,
  //         description: description,
  //         count: counter,
  //       },
  //     });

  //     setCounter(counter + 1);
  //     setClicked(true);
  //   }
  // };

  // const counterMinus = () => {
  //   if (counter > 0) {
  //     dispatch({
  //       type: 'REMOVE_FROM_BASKET',
  //       product: {
  //         id: id,
  //         name: name,
  //         price: price,
  //         description: description,
  //         count: counter,
  //       },
  //     });

  //     setCounter(counter - 1);
  //   } else {
  //     setCounter(0);
  //   }
  // };

  const basketAdd = () => {
    dispatch(addToBasket({ id, name, description, price, count }));

    setClicked(true);
    setCounter((current: number) => (current += 1));
  };

  //   setClicked(true);
  //   setCounter(counter + 1);
  // };

  // const showDetails = () => {
  //   dispatch({
  //     type: 'SHOW_PRODUCT_DETAIL',
  //     product: {
  //       id: id,
  //       name: name,
  //       price: price,
  //       description: description,
  //     },
  //   });
  // };

  return (
    <ProductStyle>
      <HeaderLine>
        <Name>{name}</Name>

        <AddSection>
          {clicked && counter > 0 ? (
            <Counter>
              <AddIcon onClick={basketAdd} />
              {counter}
              <RemoveIcon />
            </Counter>
          ) : (
            <Plus onClick={basketAdd}>Add to basket</Plus>
          )}

          <Price>Price: {price} zł</Price>
        </AddSection>
      </HeaderLine>

      <Description>description</Description>
    </ProductStyle>
  );
};

export default Product;
