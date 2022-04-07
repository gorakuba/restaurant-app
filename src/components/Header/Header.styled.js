import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10px 25px;
  background-color: ${(props) => (props.color ? colors.firstColorType : null)};
  margin-bottom: 30px;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  .link {
    text-decoration: none;
    color: ${(props) => (props.color ? colors.secondColorType : null)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderMiddle = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  font-family: ${(props) => (props.font ? fonts.firstFontType : null)};

  @media (max-width: 730px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 20px;

  .headerRightIcon {
    padding-left: 15px;
    padding-right: 15px;
    color: ${(props) => (props.color ? colors.secondColorType : null)};
  }

  .headerRightIcon:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;

export const BasketCounter = styled.div`
  font-weight: 900;
  font-family: ${(props) => (props.font ? fonts.secondFontType : null)},
    sans-serif;
`;
