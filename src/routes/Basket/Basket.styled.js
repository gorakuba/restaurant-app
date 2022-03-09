import styled from "styled-components";

const BasketStyle = styled.div`
  display: flex;
  background-color: rgb(255 255 255);
  margin: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 35px;
    width: 100%;
  }

  h1 {
    margin: 30px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

    @media (max-width: 600px) {
      margin-left: -15px;
      text-align: center;
    }
  }
`;

const LeftSide = styled.div`
  width: 70%;

  @media (max-width: 600px) {
    margin: 0 20px 20px -10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
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
    width: 100%;
    margin: 20px 60px 60px 60px;
    box-shadow: none;
  }

  .p2 {
    padding-bottom: 3vh;
  }

  .link {
    text-decoration: none;
  }

  .add {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      background-color: rgb(255 215 0);
      transition: all ease-in-out;
      transition-duration: 400ms;
    }
  }

  .delete {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 17px;
    border: none;
    border-radius: 10px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      background-color: rgb(165 42 42);
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
