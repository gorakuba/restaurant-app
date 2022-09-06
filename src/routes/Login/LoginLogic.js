import { useState } from 'react';

import usersFetchService from '../../services/usersFetchService';

import axios from 'axios';

const LoginLogic = () => {
  const [pass, setPass] = useState(false);
  const [login, setLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState('');
  const [passInfo, setPassInfo] = useState('');
  const [loginForm, setLoginForm] = useState(false);
  const [fullLogin, setFullLogin] = useState('');
  const [fullPass, setFullPass] = useState('');

  const { users } = usersFetchService();

  const loginValid = (e) => {
    if (e.target.value === '') {
      setLoginForm(false);
      setLoginInfo('Login field cannot be empty!');
    } else {
      setLogin(true);
      setLoginInfo('');
      setFullLogin(e.target.value);
      return e.target.value;
    }
  };

  const passValid = (e) => {
    if (e.target.value === '') {
      setLoginForm(false);
      setPassInfo('Password field cannot be empty!');
    } else {
      setPass(true);
      setPassInfo('');
      setFullPass(e.target.value);
      return e.target.value;
    }
  };

  const validFunc = () => {
    if (login === false && pass === false) {
      setLoginInfo('Login field cannot be empty!');
      setPassInfo('Password field cannot be empty!');
    } else if (login === true && pass === false) {
      setLoginInfo('');
      setPassInfo('Password field cannot be empty!');
    } else if (login === false && pass === true) {
      setLoginInfo('Login field cannot be empty!');
      setPassInfo('');
    } else if (login === true && pass === true) {
      users.find((user) => {
        if (fullLogin === user.name && fullPass === user.password) {
          axios({
            method: 'post',
            url: `http://localhost:3000/users/${user.id}`,
            data: {
              loginStatus: true,
            },
          });

          setLoginForm(true);
          return { loginInfo, passInfo, loginForm };
        } else if (fullLogin !== user.name && fullPass === user.password) {
          setLoginForm(false);
          setLoginInfo('User not exist!');
          return { loginInfo, loginForm };
        } else if (fullLogin === user.name && fullPass !== user.password) {
          setLoginForm(false);
          setPassInfo('Password incorrect!');
          return { passInfo, loginForm };
        } else if (fullLogin !== user.name && fullPass !== user.password) {
          setLoginForm(false);
          setLoginInfo('User not exist!');
          setPassInfo('Password incorrect!');
          return { loginInfo, passInfo, loginForm };
        }

        return { fullLogin, fullPass };
      });
    }
  };

  const loginFunc = () => {
    setLoginInfo('');
    setPassInfo('');
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
