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
import { motion } from "framer-motion";

function Header() {
  const [{ basket }] = useStateValue();
  const { openModal, showModal, setShowModal } = ModalLogic();

  return (
    <motion.div
      style={{ position: "sticky", left: 0, top: 0, zIndex: 10 }}
      initial={{ opacity: 0, marginTop: -200 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ delay: 0.2 }}
    >
      <HeaderStyle color>
        <HeaderLeft color>
          <Link to='/' style={{ textDecoration: "none" }}>
            <HomeLink color>
              <RestaurantMenuIcon />
              <HeaderLeftTitle font>Enjoy your meal!</HeaderLeftTitle>
            </HomeLink>
          </Link>
        </HeaderLeft>

        <HeaderRight color>
          <HeaderRightIcon color>
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
            <HeaderRightIcon color>
              <ShoppingBasketIcon />
            </HeaderRightIcon>
          </Link>

          {basket.length >= 1 ? (
            <BasketCounter font>{basket.length}</BasketCounter>
          ) : null}

          <Link to='/reservation'>
            <HeaderRightIcon color>
              <BookmarkAddIcon />
            </HeaderRightIcon>
          </Link>

          <Link to='/login'>
            <HeaderRightIcon color>
              <InputIcon />
            </HeaderRightIcon>
          </Link>
        </HeaderRight>
      </HeaderStyle>
    </motion.div>
  );
}

export default Header;
