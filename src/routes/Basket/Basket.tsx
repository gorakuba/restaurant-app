import { Link } from 'react-router-dom';

import BasketProduct from '../../components/BasketProduct/BasketProduct';

import {
  BasketStyle,
  HeaderLine,
  LeftHeaderSide,
  RightHeaderSide,
  ContinueShoppingCheckout,
  ContinueShopping,
  Checkout,
  UpdateCheckout,
  Update,
  SubTotal,
} from './Basket.styled';

import CurrencyFormat from 'react-currency-format';
import { motion } from 'framer-motion';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeProductFromBasket } from '../../slices/ProductSlice';
import { ProductInterface } from '../../typings';
import { getBasketTotal } from '../../states/initialState';

const Basket = () => {
  const basket = useSelector((state: RootState) => state.product.basket);
  const dispatch = useDispatch();

  return (
    <BasketStyle>
      <ContinueShoppingCheckout>
        <ContinueShopping>
          <h5>Continue shopping</h5>
        </ContinueShopping>

        <Checkout>
          <button>Checkout</button>
        </Checkout>
      </ContinueShoppingCheckout>

      <HeaderLine>
        <LeftHeaderSide>
          <h4>Description</h4>
        </LeftHeaderSide>

        <RightHeaderSide>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </RightHeaderSide>
      </HeaderLine>

      {basket?.map((product: ProductInterface) => (
        <BasketProduct
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          count={product.count}
        />
      ))}

      <UpdateCheckout>
        <Update>
          <button>update</button>
        </Update>

        <SubTotal>
          <p>subtotal</p>
          <CurrencyFormat
            renderText={(value: any) => <h3>{value} zł</h3>}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
          />
        </SubTotal>

        <Checkout>
          <button>checkout</button>
        </Checkout>
      </UpdateCheckout>
    </BasketStyle>
  );
};

export default Basket;
