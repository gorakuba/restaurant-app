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
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-left: 10px;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 97%;
    display: flex;
    flex-direction: column;
  }
`;

const TableSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export { Container, Content, TableSection };
