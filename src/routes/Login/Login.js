import React from "react";
import {
  LoginButton,
  LoginHeader,
  LoginLogic,
  LoginStyle,
} from "./Login.styled";

const Login = () => {
  return (
    <LoginLogic>
      <LoginStyle>
        <LoginHeader> Reasurant App</LoginHeader>

        <input type='text' className='login' placeholder='Enter your login' />

        <input
          type='password'
          className='pass'
          placeholder='Enter your password'
        />

        <LoginButton>Login</LoginButton>
      </LoginStyle>
    </LoginLogic>
  );
};

export default Login;
