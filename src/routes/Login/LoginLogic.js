import { useState } from "react";

const LoginLogic = () => {
  const [pass, setPass] = useState(false);
  const [login, setLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState("");
  const [passInfo, setPassInfo] = useState("");
  const [loginForm, setLoginForm] = useState(false);

  const loginValid = (e) => {
    if (e.target.value === "") {
      setLogin(false);
      setLoginForm(false);
      setLoginInfo("Login field cannot be empty!");
    } else {
      setLogin(true);
      setLoginInfo("");
      return e.target.value;
    }
  };

  const passValid = (e) => {
    if (e.target.value === "") {
      setPass(false);
      setLoginForm(false);
      setPassInfo("Password field cannot be empty!");
    } else {
      setPass(true);
      setPassInfo("");
      return e.target.value;
    }
  };

  const validFunc = () => {
    if (login === false && pass === false) {
      setLoginInfo("Login field cannot be empty!");
      setPassInfo("Password field cannot be empty!");
    } else if (login === true && pass === false) {
      setLoginInfo("");
      setPassInfo("Password field cannot be empty!");
    } else if (login === false && pass === true) {
      setLoginInfo("Login field cannot be empty!");
      setPassInfo("");
    } else if (login === true && pass === true) {
      setLoginForm(true);
    }
  };

  const loginFunc = () => {
    setLoginInfo("");
    setPassInfo("");
    setLoginForm(false);
  };

  return {
    loginFunc,
    loginInfo,
    passInfo,
    loginForm,
    loginValid,
    passValid,
    validFunc,
  };
};

export default LoginLogic;
