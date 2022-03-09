import React, { useState } from "react";
import {
  HeaderStyle,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  BasketCounter,
} from "./Header.styled";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { useStateValue } from "../../helper/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <HeaderStyle>
      <HeaderLeft>
        <Link to='/' className='link'>
          <RestaurantMenuIcon />
          <h1>Restaurant App</h1>
        </Link>
      </HeaderLeft>

      <HeaderMiddle>Enjoy your meal!</HeaderMiddle>

      <HeaderRight>
        <PersonIcon className='headerRightIcon' />
        <Link to='/basket'>
          <ShoppingBasketIcon className='headerRightIcon' />
        </Link>

        {basket.length >= 1 ? (
          <BasketCounter>{basket.length}</BasketCounter>
        ) : null}

        <Link to='/login'>
          <LoginIcon className='headerRightIcon' />
        </Link>
      </HeaderRight>
    </HeaderStyle>
  );
}

export default Header;
