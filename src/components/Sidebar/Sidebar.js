import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ListItem, SidebarStyle } from './Sidebar.styled';

import { motion } from 'framer-motion';
import axios from 'axios';

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/menu')
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <SidebarStyle>
        {menuItems.map((item) => {
          switch (item.name) {
            case 'Dania dnia':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to='/specialsoftheday'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Dania mięsne':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to='/meatdishes'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Dania wege':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to='/vegdishes'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Zupy':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to='/soups'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Fast food':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to='/fastfoods'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Pizza':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to='/pizzas'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Napoje':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    to='/drinks'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            case 'Dowóz i kontakt':
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    to='/deliveryandcontact'
                    style={{ textDecoration: 'none', color: 'rgb(0 0 0)' }}
                  >
                    <ListItem>{item.name}</ListItem>
                  </Link>
                </motion.div>
              );
            default:
              return null;
          }
        })}
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
