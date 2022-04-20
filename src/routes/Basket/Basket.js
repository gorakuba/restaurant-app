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
import { motion } from "framer-motion";

function Basket() {
  const { basket, deleteItems, checkout } = BasketLogic();

  return (
    <>
      <Header />
      <BasketStyle color font>
        {basket.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, marginTop: -200 }}
              animate={{ opacity: 1, marginTop: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            >
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

            <motion.div
              initial={{ opacity: 0, marginTop: -200 }}
              animate={{ opacity: 1, marginTop: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
            >
              <RightSide color>
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
                  <BasketAddButton color>
                    Add more items to basket
                  </BasketAddButton>
                </Link>
                <BasketDeleteButton color onClick={deleteItems}>
                  Delete items from basket
                </BasketDeleteButton>
                <Link to='/checkout' style={{ textDecoration: "none" }}>
                  <Checkout color onClick={checkout}>
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
          <motion.div
            initial={{ opacity: 0, marginTop: -200 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
          >
            <EmptyBasket>Your shopping basket is empty!</EmptyBasket>
          </motion.div>
        )}
      </BasketStyle>
    </>
  );
}

export default Basket;
