import React from "react";
import Header from "../../components/Header/Header";
import { BasketStyle, LeftSide, RightSide, Checkout } from "./Basket.styled";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../helper/reducer";
import { Link } from "react-router-dom";
import BasketLogic from "./BasketLogic";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";

function Basket() {
  const { basket, deleteItems, checkout } = BasketLogic();

  return (
    <>
      <Header />
      <BasketStyle color={color} font={font}>
        {basket.length > 0 ? (
          <>
            <LeftSide>
              {basket.map((product) => (
                <BasketProduct
                  key={basket.indexOf(product)}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </LeftSide>
            <RightSide color={color}>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className='basket__p1'>
                      Items in basket: {basket.length}
                    </p>
                    <p className='basket__p2'>Total price: {value} zł</p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
              />
              <Link to='/specialsoftheday' className='basket__link'>
                <button className='basket__add'>
                  Add more items to basket
                </button>
              </Link>
              <button className='basket__delete' onClick={deleteItems}>
                Delete items from basket
              </button>
              <Link to='/checkout' className='basket__link'>
                <Checkout color={color} onClick={checkout}>
                  Go to checkout page
                  <ShoppingCartIcon className='basket__checkoutIcon' />
                </Checkout>
              </Link>
            </RightSide>
          </>
        ) : (
          <h1>Your shopping basket is empty!</h1>
        )}
      </BasketStyle>
    </>
  );
}

export default Basket;
