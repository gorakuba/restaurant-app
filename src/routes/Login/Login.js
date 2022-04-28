import React from "react";

//styled components
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

//icons
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

//react router
import { Link } from "react-router-dom";

//login logic
import LoginLogic from "./LoginLogic";

//framer motion
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
        <LoginStyle>
          <motion.div
            initial={{ opacity: 0, marginTop: -200 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
          >
            <LoginHeader>
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
            type='text'
            placeholder='Enter your login'
            onChange={loginValid}
          />
          {!loginForm ? <LoginInfo>{loginInfo}</LoginInfo> : null}

          <PassInput
            type='password'
            placeholder='Enter your password'
            onChange={passValid}
          />
          {!loginForm ? <PassInfo>{passInfo}</PassInfo> : null}

          <LoginRemember>
            <RememberInput type='checkbox' />
            <RememberText>Zapamiętaj dane logowania</RememberText>
          </LoginRemember>

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
    </motion.div>
  );
};

export default Login;
