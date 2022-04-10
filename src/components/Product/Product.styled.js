import styled from "styled-components";
import { colors } from "../../utilities/colors";

export const ProductStyle = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  width: auto;
  padding: 10px;
  margin: 30px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};

  @media (max-width: 600px) {
    width: 95%;
    margin-left: 12.5px;
  }

  &:first-child {
    margin-top: 0px;
  }

  h3 {
    margin-left: 10px;
  }
`;

export const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  margin: 0 10px 0 0;
  font-weight: 500;
`;

export const Description = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  padding: 10px;
`;

export const AddSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 0 0 10px;

  .clicked__plus {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Counter = styled.div`
  font-size: 20px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;

  &:hover {
    cursor: pointer;
  }
`;
