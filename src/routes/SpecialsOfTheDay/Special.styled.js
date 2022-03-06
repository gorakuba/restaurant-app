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
  padding: 30px;
  width: 75%;
`;

export { Container, Content };
