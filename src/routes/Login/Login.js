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

const Login = () => {
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
          onChange={(e) => e.target.value}
        />
        <input
          type='password'
          className='pass'
          placeholder='Enter your password'
          onChange={(e) => e.target.value}
        />
        <PrivacyPolicy>
          <input type='checkbox' required />
          <p>Accept privacy policy using in our online shop!</p>
        </PrivacyPolicy>
        <LoginButton>Login</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </LoginStyle>
    </LoginLogicStyle>
  );
};

export default Login;
