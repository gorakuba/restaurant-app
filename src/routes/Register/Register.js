import React from "react";
import { Link } from "react-router-dom";
import { Error, Back } from "./Register.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../utilities/colors";

const Register = () => {
  return (
    <Error>
      <h1>Error 404</h1>
      <hr />
      <p>Resource not found on server!</p>

      <Link to='/login' className='link'>
        <Back color={color}>
          <ArrowBackIcon className='icon' />
          <p>Back to login page</p>
        </Back>
      </Link>
    </Error>
  );
};

export default Register;
