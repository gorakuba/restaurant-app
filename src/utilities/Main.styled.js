import styled from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const Container = styled.div`
  width: 50vw;
  display: flex;
  margin: 20px auto;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};

  @media (max-width: 800px) {
    flex-direction: column;
    width: 95%;
  }

  @media (min-width: 1500px) {
    width: 70vw;
  }
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 30px;
  margin-left: 25vw;
  z-index: 1;

  h1 {
    font-family: ${(props) =>
      props.font === "font" ? fonts.secondFontType : fonts.defaultFontType};
    margin: 0 20px 20px 1vw;

    @media (max-width: 800px) {
      margin: 0 20px 20px 3vw;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
  }
`;
