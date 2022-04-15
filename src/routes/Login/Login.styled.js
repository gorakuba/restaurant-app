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
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  box-shadow: 0 10px 20px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};
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
`;

export const LoginHeader = styled.div`
  font-style: italic;
  font-family: ${(props) =>
    props.font === "font" ? fonts.fifthColorType : fonts.defaultFontType};
  margin: 10px;
  width: 43vw;
  box-shadow: 0 10px 20px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  word-wrap: break-word;
  text-decoration: underline;
  background-color: ${(props) =>
    props.color === "color" ? colors.ninethColorType : colors.defaultColorType};
  border-radius: 15px;
`;

export const LoginIcon = styled.div`
  width: 40px;
  height: 40px;
  padding: 25px 10px 10px 10px;
`;

export const LoginInput = styled.input`
  border-radius: 10px;
  margin: 20px;
  border: none;
  width: 40%;
  height: 30px;
  padding: 10px;
  text-align: center;

  &:hover {
    box-shadow: 0 10px 20px
      ${(props) =>
        props.color === "color"
          ? colors.fourthColorType
          : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const PassInput = styled(LoginInput)``;

export const LoginInfo = styled.p`
  margin: 0;
  color: ${(props) =>
    props.color === "color"
      ? colors.seventhColorType
      : colors.defaultColorType};
  font-size: 12px;
  font-style: italic;
`;

export const PassInfo = styled(LoginInfo)``;

export const LoginRemember = styled.div`
  width: 40%;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const RememberInput = styled.input`
  margin-right: 20px;
`;

export const RememberText = styled.p`
  font-weight: 500;
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
      props.color === "color"
        ? colors.eighthColorType
        : colors.defaultColorType};
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
      props.color === "color"
        ? colors.tenthColorType
        : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;
