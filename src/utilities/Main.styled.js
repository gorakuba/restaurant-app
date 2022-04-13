import styled from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 30px;
  width: 75%;
  margin-left: 21vw;
  z-index: 1;

  h1 {
    font-family: ${(props) =>
      props.font === "font" ? fonts.secondFontType : fonts.defaultFontType};
    margin: 0 20px 20px 20px;
  }

  @media (max-width: 800px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
  }
`;
