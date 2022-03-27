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
import InputIcon from "@mui/icons-material/Input";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
import { useStateValue } from "../../helper/StateProvider";
import ModalLogic from "../Modal/ModalLogic";
import Modal from "../Modal/Modal";

function Header() {
  const [{ basket }] = useStateValue();
  const { openModal, showModal, setShowModal } = ModalLogic();

  return (
    <HeaderStyle>
      <HeaderLeft>
        <Link to='/' className='link'>
          <RestaurantMenuIcon />
          {/* <h1>Restaurant App</h1> */}
        </Link>
      </HeaderLeft>

      <HeaderMiddle>Enjoy your meal!</HeaderMiddle>

      <HeaderRight>
        <PersonIcon className='headerRightIcon' onClick={openModal} />

        {showModal ? (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setCloseModal={() => setShowModal(false)}
          />
        ) : null}

        <Link to='/basket'>
          <ShoppingBasketIcon className='headerRightIcon' />
        </Link>

        {basket.length >= 1 ? (
          <BasketCounter>{basket.length}</BasketCounter>
        ) : null}

        <Link to='/reservation'>
          <BookmarkAddIcon className='headerRightIcon' />
        </Link>

        <Link to='/login'>
          <InputIcon className='headerRightIcon' />
        </Link>
      </HeaderRight>
    </HeaderStyle>
  );
}

export default Header;
