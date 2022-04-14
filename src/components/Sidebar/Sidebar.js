import React from "react";
import {
  ListItem,
  OpenSidebar,
  SidebarStyle,
  Close,
  OpenSidebarTitle,
  CloseSidebarTitle,
} from "./Sidebar.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "./menu";
import { Link } from "react-router-dom";
import SidebarLogic from "./SidebarLogic";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";

function Sidebar() {
  const { mouseHover, mouseOutHover, dotsClick, sidebar, close } =
    SidebarLogic();

  return (
    <>
      {sidebar ? (
        <OpenSidebar color={color}>
          <MenuIcon onClick={dotsClick} />
          <OpenSidebarTitle>Open menu</OpenSidebarTitle>
        </OpenSidebar>
      ) : (
        <SidebarStyle color={color}>
          <Close>
            <CloseIcon className='sidebar__closeIcon' onClick={close} />
            <CloseSidebarTitle>Close menu</CloseSidebarTitle>
          </Close>
          {menuItems.map((item) => {
            switch (item.name) {
              case "Dania dnia":
                return (
                  <Link
                    to='/specialsoftheday'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Dania mięsne":
                return (
                  <Link
                    to='/meatdishes'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Dania wege":
                return (
                  <Link
                    to='/vegdishes'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Zupy":
                return (
                  <Link
                    to='/soups'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Fast food":
                return (
                  <Link
                    to='/fastfoods'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Pizza":
                return (
                  <Link
                    to='/pizzas'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Napoje":
                return (
                  <Link
                    to='/drinks'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Dowóz i kontakt":
                return (
                  <Link
                    to='/deliveryandcontact'
                    style={{ textDecoration: "none" }}
                    key={item.id}
                  >
                    <ListItem
                      color={color}
                      font={font}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='sidebar__menuIcon' />
                    </ListItem>
                  </Link>
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
