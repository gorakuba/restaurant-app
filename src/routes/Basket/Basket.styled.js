import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const BasketStyle = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  margin: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 35px;
    width: 100%;
  }
`;

export const LeftSide = styled.div`
  width: 70%;
  margin-top: 30px;

  @media (max-width: 600px) {
    margin: 0 20px 20px -10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 28.5%;
  height: 30vh;
  margin-left: 30px;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  font-style: italic;
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin: 20px 60px 60px 60px;
    box-shadow: none;
  }

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
    margin-left: 30px;
  }
`;

export const ItemsCount = styled.p`
  padding-bottom: 1vh;
`;

export const ItemsPrice = styled.p`
  padding-bottom: 4vh;
`;

export const BasketAddButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color === "color"
        ? colors.eighthColorType
        : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const BasketDeleteButton = styled(BasketAddButton)`
  margin-top: 20px;
  padding: 17px;

  &:hover {
    background-color: ${(props) =>
      props.color === "color"
        ? colors.seventhColorType
        : colors.defaultColorType};
  }
`;

export const Checkout = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 14px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color === "color"
        ? colors.eleventhColorType
        : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const CheckoutIcon = styled.div`
  margin-left: 10px;
`;

export const EmptyBasket = styled.h1`
  margin: 30px;
  font-weight: 700;
  font-family: ${(props) =>
    props.font === "font" ? fonts.fourthFontType : colors.defaultColorType};

  @media (max-width: 600px) {
    margin: 30px 0 30px -20px;
    text-align: center;
  }
`;
