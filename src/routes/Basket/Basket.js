import React from "react";

//components
import Header from "../../components/Header/Header";
import BasketProduct from "../../components/BasketProduct/BasketProduct";

//styled components
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

//currency format
import CurrencyFormat from "react-currency-format";

//basket total func
import { getBasketTotal } from "../../helper/StateProvider/reducer";

//react router
import { Link } from "react-router-dom";

//basket logic
import BasketLogic from "./BasketLogic";

//icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//framer motion
import { motion } from "framer-motion";

const Basket = () => {
  const { basket, deleteItems } = BasketLogic();

  return (
    <>
      <Header />
      <BasketStyle>
        {basket.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <RightSide>
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
                  <Checkout>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <EmptyBasket>Your shopping basket is empty!</EmptyBasket>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to='/specialsoftheday' style={{ textDecoration: "none" }}>
                <BasketAddButton>Add items to basket</BasketAddButton>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </BasketStyle>
    </>
  );
};

export default Basket;
