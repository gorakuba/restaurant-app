import styled from "styled-components";

export const LoginLogicStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginStyle = styled.div`
  width: 40vw;
  height: auto;
  background-color: ${(props) => props.theme.colors.color_3};
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
    width: 85%;
    margin-bottom: 5vh;
  }
`;

export const LoginHeader = styled.div`
  font-style: italic;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  padding: 15px;
`;

export const LoginInput = styled.input`
  border-radius: 10px;
  margin: 20px;
  border: none;
  width: 40%;
  height: 30px;
  padding: 20px;
  text-align: center;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out;
    transition-duration: 400ms;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80%;
  }
`;

export const PassInput = styled(LoginInput)``;

export const LoginInfo = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.color_6};
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
  padding: 15px;
  height: 50px;
  width: 25vw;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.color_7};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const RegisterButton = styled.button`
  margin: 20px;
  padding: 15px;
  height: 50px;
  width: 25vw;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.color_9};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;
