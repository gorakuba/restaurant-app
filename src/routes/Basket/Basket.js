import React from "react";
import Header from "../../components/Header/Header";
import {
  ItemsPrice,
  BasketStyle,
  LeftSide,
  RightSide,
  Checkout,
  ItemsCount,
  BasketAddButton,
  BasketDeleteButton,
  CheckoutIcon,
  EmptyBasket,
} from "./Basket.styled";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../helper/reducer";
import { Link } from "react-router-dom";
import BasketLogic from "./BasketLogic";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";
import { motion } from "framer-motion";

function Basket() {
  const { basket, deleteItems, checkout } = BasketLogic();

  return (
    <>
      <Header />
      <BasketStyle color={color} font={font}>
        {basket.length > 0 ? (
          <>
            <motion.div>
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
            </motion.div>

            <motion.div>
              <RightSide color={color}>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <ItemsCount>Items in basket: {basket.length}</ItemsCount>
                      <ItemsPrice>Total price: {value} zł</ItemsPrice>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                <Link to='/specialsoftheday' style={{ textDecoration: "none" }}>
                  <BasketAddButton>Add more items to basket</BasketAddButton>
                </Link>
                <BasketDeleteButton onClick={deleteItems}>
                  Delete items from basket
                </BasketDeleteButton>
                <Link to='/checkout' style={{ textDecoration: "none" }}>
                  <Checkout color={color} onClick={checkout}>
                    Go to checkout page
                    <CheckoutIcon>
                      <ShoppingCartIcon />
                    </CheckoutIcon>
                  </Checkout>
                </Link>
              </RightSide>
            </motion.div>
          </>
        ) : (
          <motion.div>
            <EmptyBasket>Your shopping basket is empty!</EmptyBasket>
          </motion.div>
        )}
      </BasketStyle>
    </>
  );
}

export default Basket;
