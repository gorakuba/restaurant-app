import styled from "styled-components";

export const LoginLogicStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginStyle = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
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

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    margin-bottom: 5vh;
  }
`;

export const LoginHeader = styled.div`
  font-style: italic;
  font-family: ${(props) =>
    props.font ? props.theme.fonts.font_5 : props.theme.defaultFont};
  margin: 10px;
  width: 41vw;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  word-wrap: break-word;
  text-decoration: underline;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_8 : props.theme.defaultColor};
  border-radius: 15px;
  padding: 15px;
`;

export const LoginIcon = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out;
    transition-duration: 400ms;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 70%;
  }
`;

export const PassInput = styled(LoginInput)``;

export const LoginInfo = styled.p`
  margin: 0;
  color: ${(props) =>
    props.color ? props.theme.colors.color_6 : props.theme.defaultColor};
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
      props.color ? props.theme.colors.color_7 : props.theme.defaultColor};
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
      props.color ? props.theme.colors.color_9 : props.theme.defaultColor};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;
