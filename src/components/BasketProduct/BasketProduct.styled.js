import styled from "styled-components";
import { colors } from "../../utilities/colors";

export const ProductStyle = styled.div`
  background-color: ${(props) => (props.color ? colors.thirdColorType : null)};
  width: auto;
  padding: 10px;
  margin: 30px 10px 10px 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px
    ${(props) => (props.color ? colors.fourthColorType : null)};

  @media (max-width: 600px) {
    margin-left: 10px;
    width: 95%;
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
  color: black;
  padding: 10px;
`;

export const RemoveSection = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 0 0 10px;

  .clicked__minus {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;
