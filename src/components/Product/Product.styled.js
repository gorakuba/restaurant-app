import styled from "styled-components";

const ProductStyle = styled.div`
  background-color: rgb(255, 255, 255);
  width: 95%;

  padding: 10px;
  margin: 30px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin-top: 0px;
  }

  h3 {
    margin-left: 10px;
  }
`;

const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  display: flex;
  margin: 0 10px 0 0;
  font-weight: 500;
`;

const Description = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: black;
  padding: 10px;
`;

const AddSection = styled.div`
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

const Counter = styled.div`
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

export { ProductStyle, HeaderLine, Price, Description, AddSection, Counter };
