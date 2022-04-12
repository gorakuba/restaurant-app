import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  margin-left: 20px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 0 30px 30px 30px;

  @media (max-width: 600px) {
    text-align: center;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px 0 15px;
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  padding: 5px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  font-family: ${(props) =>
    props.font === "font" ? fonts.thirdFontType : fonts.defaultFontType};
  font-weight: 700;

  &:hover {
    box-shadow: 0 10px 20px
      ${(props) =>
        props.color === "color"
          ? colors.fourthColorType
          : colors.defaultColorType};
    cursor: pointer;
    width: 220px;
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;
