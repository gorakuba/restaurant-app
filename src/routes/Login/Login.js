import React from 'react';
import { Link } from 'react-router-dom';

import LoginLogic from './LoginLogic';
import {
  LoginButton,
  LoginHeader,
  LoginLogicStyle,
  LoginStyle,
  LoginRemember,
  RegisterButton,
  LoginInput,
  LoginInfo,
  PassInput,
  PassInfo,
  RememberInput,
  RememberText,
} from './Login.styled';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import { motion } from 'framer-motion';

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
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <LoginLogicStyle>
        <LoginStyle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <LoginHeader>
              <Link
                to='/'
                style={{
                  textDecoration: 'none',
                  color: 'rgb(0 0 0)',
                }}
              >
                <RestaurantMenuIcon />
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
