import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';

import {
  HeaderStyle,
  HeaderRight,
  BasketCounter,
  HomeLink,
  HeaderRightIcon,
  HeaderLeft,
  SwitchModeButton,
  MenuLink,
  iconStyle,
} from './Header.styled';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';

import { motion } from 'framer-motion';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { openModal } from '../../slices/ModalSlice';
import { openSidebar } from '../../slices/SidebarSlice';

const animations = {
  initial: { opacity: 0, marginTop: -200 },
  animate: { opacity: 1, marginTop: 0 },
  transition: { delay: 0.1 },
};

const Header = ({ switchMode }) => {
  const modal = useSelector((state: RootState) => state.modal.modal);
  const basket = useSelector((state: RootState) => state.product.basket);
  const sidebar = useSelector((state: RootState) => state.product.sidebar);
  const dispatch = useDispatch();

  return (
    <motion.div
      style={{ position: 'sticky', left: 0, top: 0, zIndex: 10 }}
      {...animations}
    >
      <HeaderStyle>
        <HeaderLeft>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <HomeLink>
              <RestaurantMenuIcon />
            </HomeLink>
          </Link>

          <MenuLink>
            <MenuIcon onClick={() => dispatch(openSidebar())} />
          </MenuLink>
        </HeaderLeft>

        <HeaderRight>
          <HeaderRightIcon>
            <PersonIcon onClick={() => dispatch(openModal())} />
          </HeaderRightIcon>

          {modal ? <Modal /> : null}

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
