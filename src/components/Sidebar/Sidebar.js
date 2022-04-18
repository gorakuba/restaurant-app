import React, { useState } from "react";
import {
  ListItem,
  OpenSidebar,
  SidebarStyle,
  Close,
  OpenSidebarTitle,
  CloseSidebarTitle,
  ArrowIcon,
} from "./Sidebar.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "./menu";
import { Link } from "react-router-dom";
import SidebarLogic from "./SidebarLogic";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";
import { motion } from "framer-motion";

function Sidebar() {
  const { mouseHover, mouseOutHover, dotsClick, sidebar, close } =
    SidebarLogic();

  return (
    <>
      {sidebar ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <OpenSidebar color={color} onClick={dotsClick}>
            <MenuIcon />
            <OpenSidebarTitle>Open menu</OpenSidebarTitle>
          </OpenSidebar>
        </motion.div>
      ) : (
        <SidebarStyle color={color}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Close onClick={close}>
              <CloseIcon />
              <CloseSidebarTitle>Close menu</CloseSidebarTitle>
            </Close>
          </motion.div>

          {menuItems.map((item) => {
            switch (item.name) {
              case "Dania dnia":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
                  >
                    <Link
                      to='/specialsoftheday'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Dania mięsne":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                  >
                    <Link
                      to='/meatdishes'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Dania wege":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
                  >
                    <Link
                      to='/vegdishes'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Zupy":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
                  >
                    <Link
                      to='/soups'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Fast food":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
                  >
                    <Link
                      to='/fastfoods'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Pizza":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
                  >
                    <Link
                      to='/pizzas'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Napoje":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
                  >
                    <Link
                      to='/drinks'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              case "Dowóz i kontakt":
                return (
                  <motion.div
                    initial={{ opacity: 0, marginLeft: -200 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
                  >
                    <Link
                      to='/deliveryandcontact'
                      style={{ textDecoration: "none", color: "rgb(0 0 0)" }}
                      key={item.id}
                    >
                      <ListItem
                        color={color}
                        font={font}
                        onMouseOver={mouseHover}
                        onMouseOut={mouseOutHover}
                      >
                        {item.name}
                        <ArrowIcon>
                          <ArrowForwardIosIcon />
                        </ArrowIcon>
                      </ListItem>
                    </Link>
                  </motion.div>
                );
              default:
                return null;
            }
          })}
        </SidebarStyle>
      )}
    </>
  );
}

export default Sidebar;
