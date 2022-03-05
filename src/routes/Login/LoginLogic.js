import React, { useState } from "react";

const LoginLogic = () => {
  const adminUser = {
    email: "gorakuba083@gmail.com",
    password: "kubag123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (e, details) => {
    e.preventDefault();
  };

  const logout = (details) => {
    console.log("Logout");
  };

  const register = (e) => {
    e.preventDefault();
  };

  return { login, register };
};

export default LoginLogic;
