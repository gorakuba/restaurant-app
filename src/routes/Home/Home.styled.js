import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgb(255 255 255);
  margin-left: 20px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
`;

const Content = styled.div`
  background-color: rgb(255 255 255);
  padding: 0 30px 30px 30px;

  @media (max-width: 600px) {
    text-align: center;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px 0 15px;
  }
`;

const Button = styled.button`
  margin-top: 50px;
  padding: 5px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: rgb(0 0 0);
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
