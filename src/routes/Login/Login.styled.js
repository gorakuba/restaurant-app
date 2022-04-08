import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const LoginLogicStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginStyle = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: ${(props) => (props.color ? colors.thirdColorType : null)};
  box-shadow: 0 10px 20px
    ${(props) => (props.color ? colors.fourthColorType : null)};
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
    margin-bottom: 5vh;
  }

  .loginInfo,
  .passInfo {
    margin: 0;
    color: ${(props) => (props.color ? colors.seventhColorType : null)};
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
      box-shadow: 0 10px 20px
        ${(props) => (props.color ? colors.fourthColorType : null)};
      transition: all ease-in-out;
      transition-duration: 400ms;
    }

    @media (max-width: 1000px) {
      width: 70%;
    }
  }
`;

export const LoginHeader = styled.div`
  font-style: italic;
  font-family: ${(props) => (props.font ? fonts.fifthColorType : null)};
  margin: 10px;
  width: 43vw;
  box-shadow: 0 10px 20px
    ${(props) => (props.color ? colors.fourthColorType : null)};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  word-wrap: break-word;
  text-decoration: underline;
  background-color: ${(props) => (props.color ? colors.ninethColorType : null)};
  border-radius: 15px;

  .linkT {
    text-decoration: none;
    color: ${(props) => (props.color ? colors.secondColorType : null)};
    display: flex;
    align-items: center;
  }

  .icon {
    width: 40px;
    height: 40px;

    @media (max-width: 600px) {
      flex-direction: column;
      margin-left: 0;
    }
  }
`;

export const LoginButton = styled.button`
  margin: 40px;
  margin-bottom: 10px;
  padding: 10px;
  height: 40px;
  width: 20vw;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color ? colors.eighthColorType : null};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const RegisterButton = styled.button`
  margin: 20px;
  padding: 10px;
  height: 40px;
  width: 20vw;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color ? colors.tenthColorType : null};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const LoginRemember = styled.div`
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
