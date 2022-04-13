import React from "react";
import {
  LoginButton,
  LoginHeader,
  LoginLogicStyle,
  LoginStyle,
  LoginRemember,
  RegisterButton,
} from "./Login.styled";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Link } from "react-router-dom";
import LoginLogic from "./LoginLogic";
import { color } from "../../utilities/colors";
import { font } from "../../utilities/fonts";

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
      <LoginStyle color={color}>
        <LoginHeader color={color} font={font}>
          <Link to='/' className='login__linkT'>
            <RestaurantMenuIcon className='login__icon' />
          </Link>
        </LoginHeader>

        <input
          type='text'
          className='login__login'
          placeholder='Enter your login'
          onChange={loginValid}
        />
        {!loginForm ? <p className='login__loginInfo'>{loginInfo}</p> : null}

        <input
          type='password'
          className='login__pass'
          placeholder='Enter your password'
          onChange={passValid}
        />
        {!loginForm ? <p className='login__passInfo'>{passInfo}</p> : null}

        <LoginRemember>
          <input type='checkbox' />
          <p>Zapamiętaj dane logowania</p>
        </LoginRemember>

        {loginForm ? (
          <Link to='/'>
            <LoginButton color={color} onClick={loginFunc}>
              Login
            </LoginButton>
          </Link>
        ) : (
          <LoginButton color={color} onClick={validFunc}>
            Sprawdź
          </LoginButton>
        )}

        <Link to='/register'>
          <RegisterButton color={color}>Register</RegisterButton>
        </Link>
      </LoginStyle>
    </LoginLogicStyle>
  );
};

export default Login;
