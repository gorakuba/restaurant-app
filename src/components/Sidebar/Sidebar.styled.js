import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const OpenSidebar = styled.div`
  position: fixed;
  left: 0;
  top: auto;
  margin: 20px 0 20px 60px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    position: static;
  }
`;

export const OpenSidebarTitle = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarStyle = styled.div`
  position: fixed;
  left: 0;
  top: auto;
  width: 20%;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  margin: 0 20px 20px 30px;

  @media (max-width: 800px) {
    position: static;
    left: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
  }
`;

export const Close = styled.div`
  margin: 20px 0 20px 30px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: left;
    margin: 30px 0 20px 70px;
  }
`;

export const CloseSidebarTitle = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 20px;
  width: 70%;
  height: 30px;
  font-size: 16px;
  font-family: ${(props) =>
    props.font === "font" ? fonts.thirdFontType : fonts.defaultFontType};

  &:hover {
    background-color: ${(props) =>
      props.color === "color"
        ? colors.sixthColorType
        : colors.defaultColorType};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    width: 80%;
    box-shadow: 0 10px 20px
      ${(props) =>
        props.color === "color"
          ? colors.fourthColorType
          : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 400ms;

    @media (max-width: 800px) {
      &:hover {
        width: 100%;
      }
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: 10px;
    justify-content: center;
  }
`;

export const ArrowIcon = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 800px) {
    display: none;
  }
`;
