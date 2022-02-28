import styled from "styled-components";

const BasketStyle = styled.div`
  display: flex;
  background-color: rgb(255 255 255);

  h1 {
    margin: 40px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
`;

const LeftSide = styled.div`
  width: 70%;
`;

const RightSide = styled.div`
  width: 30%;
  background-color: rgb(255 255 255);
`;

export { BasketStyle, LeftSide, RightSide };
