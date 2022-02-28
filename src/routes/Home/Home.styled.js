import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgb(255 255 255);
`;

const Content = styled.div`
  background-color: rgb(255 255 255);
  padding: 30px;
  width: 75%;
`;

const Button = styled.button`
  margin-top: 50px;
  padding: 5px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: rgb(0 0 255);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 700;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 220px;
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;

export { Container, Content, Button };
