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
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, marginTop: -200 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ delay: 0.2 }}
    >
      <LoginLogicStyle>
        <LoginStyle color>
          <motion.div
            initial={{ opacity: 0, marginTop: -200 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
          >
            <LoginHeader color font>
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
          </motion.div>

          <LoginInput
            color
            type='text'
            placeholder='Enter your login'
            onChange={loginValid}
          />
          {!loginForm ? <LoginInfo color>{loginInfo}</LoginInfo> : null}

          <PassInput
            color
            type='password'
            placeholder='Enter your password'
            onChange={passValid}
          />
          {!loginForm ? <PassInfo color>{passInfo}</PassInfo> : null}

          <LoginRemember>
            <RememberInput type='checkbox' />
            <RememberText>Zapamiętaj dane logowania</RememberText>
          </LoginRemember>

          {loginForm ? (
            <Link to='/'>
              <LoginButton color onClick={loginFunc}>
                Login
              </LoginButton>
            </Link>
          ) : (
            <LoginButton color onClick={validFunc}>
              Sprawdź
            </LoginButton>
          )}

          <Link to='/register'>
            <RegisterButton color>Register</RegisterButton>
          </Link>
        </LoginStyle>
      </LoginLogicStyle>
    </motion.div>
  );
};

export default Login;
