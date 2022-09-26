import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import ModalLogic from '../Modal/ModalLogic';
import { useStateValue } from '../../helper/StateProvider/StateProvider';
import {
  HeaderStyle,
  HeaderRight,
  BasketCounter,
  HomeLink,
  HeaderRightIcon,
  HeaderLeft,
  SwitchModeButton,
  iconStyle,
} from './Header.styled';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { motion } from 'framer-motion';

const Header = ({ switchMode }) => {
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

          <div className='viewOption'>
            <SwitchModeButton onClick={switchMode}>
              <div className='lightModeIcon'>
                <motion.div transition={{ duration: 0.2 }}>
                  <LightModeIcon style={iconStyle} />
                </motion.div>
              </div>
              <div className='darkModeIcon'>
                <motion.div transition={{ duration: 0.2 }}>
                  <DarkModeIcon style={iconStyle} />
                </motion.div>
              </div>
            </SwitchModeButton>
          </div>
        </HeaderRight>
      </HeaderStyle>
    </motion.div>
  );
};

export default Header;
