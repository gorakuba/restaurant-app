import React from "react";

//styled components
import {
  HeaderStyle,
  HeaderLeftTitle,
  HeaderRight,
  BasketCounter,
  HomeLink,
  HeaderRightIcon,
  HeaderLeft,
} from "./Header.styled";

//icons
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InputIcon from "@mui/icons-material/Input";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LogoutIcon from "@mui/icons-material/Logout";

//react router
import { Link } from "react-router-dom";

//useStateValue
import { useStateValue } from "../../helper/StateProvider/StateProvider";

//modal window and modal logic
import Modal from "../Modal/Modal";
import ModalLogic from "../Modal/ModalLogic";

//header logic
import HeaderLogic from "./HeaderLogic";

//framer motion
import { motion } from "framer-motion";

// //users data
import { users } from "../../resources/users";

const Header = () => {
  const [{ basket }] = useStateValue();
  const { openModal, showModal, setShowModal } = ModalLogic();
  const { check, logout } = HeaderLogic();

  return (
    <motion.div
      style={{ position: "sticky", left: 0, top: 0, zIndex: 10 }}
      initial={{ opacity: 0, marginTop: -200 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ delay: 0.2 }}
    >
      <HeaderStyle>
        <HeaderLeft>
          <Link to='/' style={{ textDecoration: "none" }}>
            <HomeLink>
              <RestaurantMenuIcon />
              <HeaderLeftTitle>
                Enjoy your meal
                {users.map((user) =>
                  user.loginStatus === true ? `, ${user.name}` : ""
                )}
                !
              </HeaderLeftTitle>
            </HomeLink>
          </Link>
        </HeaderLeft>

        <HeaderRight>
          <HeaderRightIcon>
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
            <HeaderRightIcon>
              <ShoppingBasketIcon />
            </HeaderRightIcon>
          </Link>

          {basket.length >= 1 ? (
            <BasketCounter>{basket.length}</BasketCounter>
          ) : null}

          <Link to='/reservation'>
            <HeaderRightIcon>
              <BookmarkAddIcon />
            </HeaderRightIcon>
          </Link>

          {check === false ? (
            <Link to='/login'>
              <HeaderRightIcon>
                <InputIcon />
              </HeaderRightIcon>
            </Link>
          ) : (
            <Link to='/'>
              <HeaderRightIcon>
                <LogoutIcon onClick={logout} />
              </HeaderRightIcon>
            </Link>
          )}
        </HeaderRight>
      </HeaderStyle>
    </motion.div>
  );
};

export default Header;
