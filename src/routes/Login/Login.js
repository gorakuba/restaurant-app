import React from "react";
import {
  LoginButton,
  LoginHeader,
  LoginLogicStyle,
  LoginStyle,
  LoginRemember,
  RegisterButton,
  LoginIcon,
  LoginInput,
  LoginInfo,
  PassInput,
  PassInfo,
  RememberInput,
  RememberText,
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
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "rgb(0 0 0)",
            }}
          >
            <LoginIcon>
              <RestaurantMenuIcon />
            </LoginIcon>
          </Link>
        </LoginHeader>

        <LoginInput
          color={color}
          type='text'
          placeholder='Enter your login'
          onChange={loginValid}
        />
        {!loginForm ? <LoginInfo color={color}>{loginInfo}</LoginInfo> : null}

        <PassInput
          color={color}
          type='password'
          placeholder='Enter your password'
          onChange={passValid}
        />
        {!loginForm ? <PassInfo color={color}>{passInfo}</PassInfo> : null}

        <LoginRemember>
          <RememberInput type='checkbox' />
          <RememberText>Zapamiętaj dane logowania</RememberText>
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
