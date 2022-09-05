import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import ModalLogic from '../Modal/ModalLogic';
import { useStateValue } from '../../helper/StateProvider/StateProvider';
import {
  HeaderStyle,
  HeaderLeftTitle,
  HeaderRight,
  BasketCounter,
  HomeLink,
  HeaderRightIcon,
  HeaderLeft,
} from './Header.styled';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

import { motion } from 'framer-motion';

const Header = () => {
  const [{ basket }] = useStateValue();
  const { openModal, showModal, setShowModal } = ModalLogic();

  return (
    <motion.div
      style={{ position: 'sticky', left: 0, top: 0, zIndex: 10 }}
      initial={{ opacity: 0, marginTop: -200 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ delay: 0.1 }}
    >
      <HeaderStyle>
        <HeaderLeft>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <HomeLink>
              <RestaurantMenuIcon />
              <HeaderLeftTitle>Enjoy your meal!</HeaderLeftTitle>
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
        </HeaderRight>
      </HeaderStyle>
    </motion.div>
  );
};

export default Header;
