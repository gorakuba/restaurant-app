import React from "react";
import Header from "../../components/Header/Header";
import { useStateValue } from "../../helper/StateProvider";
import { BasketStyle, LeftSide, RightSide } from "./Basket.styled";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../helper/reducer";

function Basket() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <BasketStyle>
        {basket?.length > 0 ? (
          <>
            <LeftSide>
              {basket?.map((product) => (
                <BasketProduct
                  key={product.id}
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
                    <p>Items in basket: {basket.length}</p>
                    <p>Total price: {value} zł</p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
              />
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
