import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseListItem, ListItem, SidebarStyle } from './Sidebar.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { closeSidebar } from '../../slices/SidebarSlice';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { MenuItemInterface } from '../../typings';
import { sidebarAnimations } from '../../utils/animations';

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState<MenuItemInterface[]>([]);
  const sidebar = useSelector((state: RootState) => state.sidebar.sidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/menu')
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      });
  }, []);

  return (
    <AnimatePresence>
      {sidebar && (
        <SidebarStyle>
          {menuItems.map((item: MenuItemInterface) => {
            switch (item.name) {
              case 'Specials of the day':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.specials}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Meat dishes':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.meatDishes}>
                    <Link to='/meat-dishes' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Vege dishes':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.vege}>
                    <Link to='/vege-dishes' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Soups':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.soups}>
                    <Link to='/soups' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Fast foods':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.fastFoods}>
                    <Link to='/fast-foods' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Pizzas':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.pizzas}>
                    <Link to='/pizzas' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Drinks':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.drinks}>
                    <Link to='/drinks' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              case 'Location':
                return (
                  <motion.div key={item.id} {...sidebarAnimations.location}>
                    <Link to='/location' style={{ textDecoration: 'none' }}>
                      <ListItem>{item.name}</ListItem>
                    </Link>
                  </motion.div>
                );
              default:
                return null;
            }
          })}

          <motion.div {...sidebarAnimations.closeMenu}>
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
