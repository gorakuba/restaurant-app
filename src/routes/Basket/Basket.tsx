import { Link } from 'react-router-dom';
import BasketProduct from '../../components/BasketProduct/BasketProduct';
import {
  BasketStyle,
  HeaderLine,
  LeftHeaderSide,
  RightHeaderSide,
  ContinueShoppingBasketLenght,
  ContinueShopping,
  Checkout,
  UpdateCheckout,
  Update,
  SubTotal,
  ItemsInBasket,
  BasketProductLook,
  DeleteIconItem,
} from './Basket.styled';
import CurrencyFormat from 'react-currency-format';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../api/store';
import { removeProductFromBasket } from '../../slices/ProductSlice';
import { ProductInterface } from '../../typings';
import { getBasketTotal } from '../../states/states';
import DeleteIcon from '@mui/icons-material/Delete';

const Basket = () => {
  const basket = useSelector((state: RootState) => state.product.basket);
  const dispatch = useDispatch();

  return (
    <BasketStyle>
      <ContinueShoppingBasketLenght>
        <ContinueShopping>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h5>Continue shopping</h5>
          </Link>
        </ContinueShopping>

        <ItemsInBasket>
          <h5>Items in basket: {basket.length > 0 ? basket.length : 0}</h5>
        </ItemsInBasket>
      </ContinueShoppingBasketLenght>

      <HeaderLine>
        <LeftHeaderSide>
          <h4>Description</h4>
        </LeftHeaderSide>

        <RightHeaderSide>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </RightHeaderSide>
      </HeaderLine>

      {basket.length > 0 ? (
        basket.map((product: ProductInterface) => (
          <BasketProductLook key={product.id}>
            <BasketProduct
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              count={product.count}
              photoSrc={product.photoSrc}
              title={product.title}
            />
            <DeleteIconItem>
              <DeleteIcon
                onClick={() => dispatch(removeProductFromBasket(product))}
              />
            </DeleteIconItem>
          </BasketProductLook>
        ))
      ) : (
        <h5>No items in basket!</h5>
      )}

      <UpdateCheckout>
        <Update>
          <Link to='/'>
            <button>update</button>
          </Link>
        </Update>

        <SubTotal>
          <p>subtotal</p>
          <CurrencyFormat
            displayType={'text'}
            decimalScale={2}
            value={getBasketTotal(basket)}
            thousandSeparator={true}
            renderText={(value: any) => <h3>{value} zł</h3>}
          />
        </SubTotal>

        <Checkout>
          <Link to='/checkout'>
            <button>checkout</button>
          </Link>
        </Checkout>
      </UpdateCheckout>
    </BasketStyle>
  );
};

export default Basket;
