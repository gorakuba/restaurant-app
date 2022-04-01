import styled from "styled-components";

const LoginLogicStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginStyle = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: rgb(255 255 255);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  padding: 5vh;
  padding-bottom: 50px;
  border-radius: 20px;
  border: none;

  @media (max-width: 600px) {
    width: 70%;
    height: 100vh;
  }

  .loginInfo,
  .passInfo {
    margin: 0;
    color: red;
    font-size: 12px;
    font-style: italic;
  }

  .none {
    display: none;
  }

  .login,
  .pass {
    border-radius: 10px;
    margin: 20px;
    border: none;
    width: 40%;
    height: 30px;
    padding: 10px;
    text-align: center;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      transition: all ease-in-out;
      transition-duration: 400ms;
    }

    @media (max-width: 1000px) {
      width: 70%;
    }
  }
`;

const LoginHeader = styled.div`
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 10px;
  width: 43vw;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  word-wrap: break-word;
  text-decoration: underline;
  background-color: rgb(30 144 255);

  .linkT {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 40px;
    height: 40px;

    @media (max-width: 600px) {
      flex-direction: column;
      margin-left: 0;
      margin-top: 40px;
    }
  }
`;

const LoginButton = styled.button`
  margin: 40px;
  margin-bottom: 10px;
  padding: 10px;
  height: 40px;
  width: 20vw;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(255 215 0);
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

const RegisterButton = styled.button`
  margin: 20px;
  padding: 10px;
  height: 40px;
  width: 20vw;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(218, 165, 32);
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

const LoginRemember = styled.div`
  width: 40%;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  input {
    margin-right: 20px;
  }

  p {
    font-weight: 500;
  }
`;

export {
  LoginStyle,
  LoginButton,
  LoginLogicStyle,
  LoginHeader,
  RegisterButton,
  LoginRemember,
};
