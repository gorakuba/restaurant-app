import React from "react";
import { ListItem, OpenSidebar, SidebarStyle, Close } from "./Sidebar.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "./menu";
import { Link } from "react-router-dom";
import SidebarLogic from "./SidebarLogic";

function Sidebar() {
  const { mouseHover, mouseOutHover, dotsClick, sidebar, close } =
    SidebarLogic();

  return (
    <>
      {sidebar ? (
        <OpenSidebar>
          <MenuIcon onClick={dotsClick} />
        </OpenSidebar>
      ) : (
        <SidebarStyle>
          <Close>
            <CloseIcon className='closeIcon' onClick={close} />
            <p>Close menu</p>
          </Close>
          {menuItems.map((item) => {
            switch (item.name) {
              case "Dania dnia":
                return (
                  <Link to='/specialsoftheday' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Dania mięsne":
                return (
                  <Link to='/meatdishes' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Dania wege":
                return (
                  <Link to='/vegdishes' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Zupy":
                return (
                  <Link to='/soups' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Fast food":
                return (
                  <Link to='/fastfoods' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Pizza":
                return (
                  <Link to='/pizzas' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Napoje":
                return (
                  <Link to='/drinks' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
                      {item.name}
                      <ArrowForwardIosIcon className='menuIcon' />
                    </ListItem>
                  </Link>
                );
              case "Dowóz i kontakt":
                return (
                  <Link to='/deliveryandcontact' className='link' key={item.id}>
                    <ListItem
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOutHover}
                    >
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
      )}
    </>
  );
}

export default Sidebar;
