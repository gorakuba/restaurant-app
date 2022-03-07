import styled from "styled-components";

const BasketStyle = styled.div`
  display: flex;
  background-color: rgb(255 255 255);
  margin: 20px;
  min-width: 350px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
  }

  h1 {
    margin: 40px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

const LeftSide = styled.div`
  width: 70%;

  @media (max-width: 600px) {
    margin: 20px;
    width: 87%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const RightSide = styled.div`
  width: 28.5%;
  height: 30vh;
  margin-left: 30px;
  background-color: rgb(255 255 255);
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  font-style: italic;
  text-align: center;

  @media (max-width: 600px) {
    width: 85%;
    align-items: center;
    margin: 40px;
    box-shadow: none;
  }

  .p2 {
    padding-bottom: 3vh;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: rgb(255 215 0);
      transition: all ease-in-out;
      transition-duration: 400ms;
    }
  }

  @media (max-width: 1000px) {
    width: auto;
    margin-left: 30px;
  }
`;

export { BasketStyle, LeftSide, RightSide };
