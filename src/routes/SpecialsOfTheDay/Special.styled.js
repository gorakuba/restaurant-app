import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => (props.color ? colors.thirdColorType : null)};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: ${(props) => (props.color ? colors.thirdColorType : null)};
  padding: 30px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-family: ${(props) => (props.font ? fonts.secondFontType : null)};
    margin: 0 20px 20px 20px;
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
