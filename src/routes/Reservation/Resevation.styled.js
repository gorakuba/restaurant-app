import styled from "styled-components";
import { colors } from "../../utilities/colors";

export const Container = styled.div`
  display: flex;
  width: 50vw;
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
  padding: 0 30px 30px 30px;
  width: 100%;
  margin-left: 25vw;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
  }
`;

export const ResHeader = styled.h1`
  margin-left: 1vw;
  text-align: center;
`;
