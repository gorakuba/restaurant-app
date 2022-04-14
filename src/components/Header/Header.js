import React from "react";
import {
  HeaderStyle,
  HeaderLeft,
  HeaderLeftTitle,
  HeaderRight,
  BasketCounter,
  HomeLink,
  HeaderRightIcon,
} from "./Header.styled";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InputIcon from "@mui/icons-material/Input";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
import { useStateValue } from "../../helper/StateProvider";
import ModalLogic from "../Modal/ModalLogic";
import Modal from "../Modal/Modal";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";

function Header() {
  const [{ basket }] = useStateValue();
  const { openModal, showModal, setShowModal } = ModalLogic();

  return (
    <HeaderStyle color={color}>
      <HeaderLeft color={color}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <HomeLink color={color}>
            <RestaurantMenuIcon />
            <HeaderLeftTitle font={font}>Enjoy your meal!</HeaderLeftTitle>
          </HomeLink>
        </Link>
      </HeaderLeft>

      <HeaderRight color={color}>
        <HeaderRightIcon color={color}>
          <PersonIcon onClick={openModal} />
        </HeaderRightIcon>

        {showModal ? (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setCloseModal={() => setShowModal(false)}
          />
        ) : null}

        <Link to='/basket'>
          <HeaderRightIcon color={color}>
            <ShoppingBasketIcon />
          </HeaderRightIcon>
        </Link>

        {basket.length >= 1 ? (
          <BasketCounter font>{basket.length}</BasketCounter>
        ) : null}

        <Link to='/reservation'>
          <HeaderRightIcon color={color}>
            <BookmarkAddIcon />
          </HeaderRightIcon>
        </Link>

        <Link to='/login'>
          <HeaderRightIcon color={color}>
            <InputIcon />
          </HeaderRightIcon>
        </Link>
      </HeaderRight>
    </HeaderStyle>
  );
}

export default Header;
