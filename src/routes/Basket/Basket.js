import React from "react";
import Header from "../../components/Header/Header";
import { useStateValue } from "../../helper/StateProvider";
import { BasketStyle, LeftSide, RightSide } from "./Basket.styled";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../helper/reducer";
import { Link } from "react-router-dom";

function Basket() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <BasketStyle>
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
            <RightSide>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className='p1'>Items in basket: {basket.length}</p>
                    <p className='p2'>Total price: {value} zł</p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
              />
              <Link to='/specialsoftheday' className='link'>
                <button className='add'>Add more items to basket</button>
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
