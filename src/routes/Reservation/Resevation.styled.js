import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgb(255 255 255);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  background-color: rgb(255 255 255);
  padding: 0 30px 30px 30px;
  width: 75%;

  h1 {
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const TableSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export { Container, Content, TableSection };
