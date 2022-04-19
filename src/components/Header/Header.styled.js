import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  background-color: ${(props) =>
    props.color === "color" ? colors.firstColorType : colors.defaultColorType};
  margin-bottom: 30px;
  justify-content: space-between;
  width: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const HomeLink = styled.div`
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderLeftTitle = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  font-family: ${(props) =>
    props.font === "font" ? fonts.firstFontType : fonts.defaultFontType};

  @media (max-width: 730px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 20px;
`;

export const HeaderRightIcon = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;

export const BasketCounter = styled.div`
  font-weight: 900;
  font-family: ${(props) =>
      props.font === "font" ? fonts.secondFontType : fonts.defaultFontType},
    sans-serif;
`;
