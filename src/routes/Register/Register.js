import React from "react";
import { Link } from "react-router-dom";
import { Error, Back, RegisterIcon } from "./Register.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  return (
    <Error>
      <h1>Error 404</h1>
      <hr />
      <p>Resource not found on server!</p>

      <Link to='/login' style={{ textDecoration: "none", color: "rgb(0 0 0)" }}>
        <Back>
          <RegisterIcon>
            <ArrowBackIcon />
          </RegisterIcon>
          <p>Back to login page</p>
        </Back>
      </Link>
    </Error>
  );
};

export default Register;
