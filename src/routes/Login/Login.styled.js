import styled from "styled-components";

const LoginLogic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginStyle = styled.div`
  width: 50%;
  height: 70vh;
  background-color: rgb(255 255 255);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  border-radius: 10px;
  border: none;

  .login,
  .pass {
    border-radius: 10px;
    margin: 20px;
    border: none;
    width: 40%;
    height: 30px;
    padding: 10px;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      transition: all ease-in-out;
      transition-duration: 400ms;
    }
  }
`;

const LoginHeader = styled.h1`
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const LoginButton = styled.button`
  margin: 40px;
  margin-bottom: 10px;
  padding: 10px;
  height: 40px;
  width: 40%;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(255 215 0);
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export { LoginStyle, LoginButton, LoginLogic, LoginHeader };
