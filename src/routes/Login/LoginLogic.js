import { useState } from "react";

//users data
import { users } from "../../resources/users";

const LoginLogic = () => {
  const [pass, setPass] = useState(false);
  const [login, setLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState("");
  const [passInfo, setPassInfo] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const [fullLogin, setFullLogin] = useState("");
  const [fullPass, setFullPass] = useState("");

  const loginValid = (e) => {
    if (e.target.value === "") {
      setLoginForm(false);
      setLoginInfo("Login field cannot be empty!");
    } else {
      setLogin(true);
      setLoginInfo("");
      setFullLogin(e.target.value);
      return e.target.value;
    }
  };

  const passValid = (e) => {
    if (e.target.value === "") {
      setLoginForm(false);
      setPassInfo("Password field cannot be empty!");
    } else {
      setPass(true);
      setPassInfo("");
      setFullPass(e.target.value);
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

    users.map((user) => {
      if (user.name === fullLogin && user.password === fullPass) {
        return (user.loginStatus = true);
      }
      return { fullLogin, fullPass };
    });
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
