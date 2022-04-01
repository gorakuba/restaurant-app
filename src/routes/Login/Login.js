import React from "react";
import {
  LoginButton,
  LoginHeader,
  LoginLogicStyle,
  LoginStyle,
  PrivacyPolicy,
  RegisterButton,
} from "./Login.styled";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Link } from "react-router-dom";
import LoginLogic from "./LoginLogic";

const Login = () => {
  const {
    loginFunc,
    loginInfo,
    passInfo,
    loginForm,
    loginValid,
    passValid,
    validFunc,
  } = LoginLogic();

  return (
    <LoginLogicStyle>
      <LoginStyle>
        <LoginHeader>
          <Link to='/' className='linkT'>
            <RestaurantMenuIcon className='icon' />
          </Link>
        </LoginHeader>

        <input
          type='text'
          className='login'
          placeholder='Enter your login'
          onChange={loginValid}
        />
        {!loginForm ? <p className='loginInfo'>{loginInfo}</p> : null}

        <input
          type='password'
          className='pass'
          placeholder='Enter your password'
          onChange={passValid}
        />
        {!loginForm ? <p className='passInfo'>{passInfo}</p> : null}

        <PrivacyPolicy>
          <input type='checkbox' required />
          <p>Accept privacy policy using in our online shop!</p>
        </PrivacyPolicy>

        {loginForm ? (
          <Link to='/'>
            <LoginButton onClick={loginFunc}>Login</LoginButton>
          </Link>
        ) : (
          <LoginButton onClick={validFunc}>Sprawdź</LoginButton>
        )}

        <Link to='/register'>
          <RegisterButton>Register</RegisterButton>
        </Link>
      </LoginStyle>
    </LoginLogicStyle>
  );
};

export default Login;
