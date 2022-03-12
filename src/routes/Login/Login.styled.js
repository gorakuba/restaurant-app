import styled from "styled-components";

const LoginLogicStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginStyle = styled.div`
  width: 50%;
  height: 85vh;
  background-color: rgb(255 255 255);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 20px;
  border: none;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 70%;
    height: 100vh;
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

const LoginHeader = styled.h1`
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  word-wrap: break-word;
  text-decoration: underline;

  .linkT {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-left: 30px;

    @media (max-width: 600px) {
      flex-direction: column;
      margin-left: 0;
      margin-top: 40px;
      /* margin-bottom: -40px; */
    }
  }
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

const RegisterButton = styled.button`
  margin: 20px;
  padding: 10px;
  height: 40px;
  width: 40%;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(218, 165, 32);
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

const PrivacyPolicy = styled.div`
  width: 40%;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;

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
  PrivacyPolicy,
};
