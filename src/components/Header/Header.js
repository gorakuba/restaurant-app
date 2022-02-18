import React from "react";
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

function Header() {
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
        <ShoppingBasketIcon className='headerRightIcon' />
        <BasketCounter>: 0</BasketCounter>
        <LoginIcon className='headerRightIcon' />
      </HeaderRight>
    </HeaderStyle>
  );
}

export default Header;
