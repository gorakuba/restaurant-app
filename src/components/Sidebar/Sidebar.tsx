import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CloseListItem, ListItem, SidebarStyle } from './Sidebar.styled';

import { AnimatePresence, motion } from 'framer-motion';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { closeSidebar } from '../../slices/SidebarSlice';

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import { MenuItemInterface } from '../../typings';
import { animations } from './animations';

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState<MenuItemInterface[]>([]);
  const sidebar = useSelector((state: RootState) => state.sidebar.sidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<MenuItemInterface[]>(' http://localhost:3001/menu')
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AnimatePresence>
      {sidebar && (
        <SidebarStyle>
          {menuItems.map((item: MenuItemInterface) => {
            switch (item.name) {
              case 'Dania dnia':
                return (
                  <motion.div key={item.id} {...animations.specials}>
                    <Link
                      to='/specialsoftheday'
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Dania mięsne':
                return (
                  <motion.div key={item.id} {...animations.meatDishes}>
                    <Link to='/meatdishes' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Dania wege':
                return (
                  <motion.div key={item.id} {...animations.vege}>
                    <Link to='/vegdishes' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Zupy':
                return (
                  <motion.div key={item.id} {...animations.soups}>
                    <Link to='/soups' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Fast food':
                return (
                  <motion.div key={item.id} {...animations.fastFoods}>
                    <Link to='/fastfoods' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Pizza':
                return (
                  <motion.div key={item.id} {...animations.pizzas}>
                    <Link to='/pizzas' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Napoje':
                return (
                  <motion.div key={item.id} {...animations.drinks}>
                    <Link to='/drinks' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Dowóz i kontakt':
                return (
                  <motion.div key={item.id} {...animations.deliveryContact}>
                    <Link
                      to='/deliveryandcontact'
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              default:
                return null;
            }
          })}

          <motion.div {...animations.closeMenu}>
            <CloseListItem>
              <KeyboardDoubleArrowUpIcon
                onClick={() => dispatch(closeSidebar())}
              />
            </CloseListItem>
          </motion.div>
        </SidebarStyle>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
