import { useState, useEffect } from "react";

//users data
import { users } from "../../resources/users";

const HeaderLogic = () => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    users.map((user) => {
      if (user.loginStatus === true) {
        setCheck(true);
        return check;
      }
      return check;
    });
  }, [check, setCheck]);

  const logout = () => {
    users.map((user) => (user.loginStatus = false));
    setCheck(false);
    window.location.reload();
  };

  return { check, setCheck, logout };
};

export default HeaderLogic;
