import React from "react";
import { ListItem, SidebarStyle } from "./Sidebar.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { menuItems } from "./menu";
import { Link } from "react-router-dom";
import SidebarLogic from "./SidebarLogic";

function Sidebar() {
  const { mouseHover, mouseOutHover } = SidebarLogic();

  return (
    <SidebarStyle>
      {menuItems.map((item, key) => {
        switch (item.name) {
          case "Dania dnia":
            return (
              <Link to='/specialsoftheday' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Dania mięsne":
            return (
              <Link to='/meatdishes' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Dania wege":
            return (
              <Link to='/vegdishes' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Zupy":
            return (
              <Link to='/soups' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Fast food":
            return (
              <Link to='/fastfoods' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Pizza":
            return (
              <Link to='/pizzas' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Napoje":
            return (
              <Link to='/drinks' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          case "Dowóz i kontakt":
            return (
              <Link to='/deliveryandcontact' className='link' key={item.id}>
                <ListItem onMouseOver={mouseHover} onMouseOut={mouseOutHover}>
                  {item.name}
                  <ArrowForwardIosIcon className='menuIcon' />
                </ListItem>
              </Link>
            );
          default:
            return null;
        }
      })}
    </SidebarStyle>
  );
}

export default Sidebar;
