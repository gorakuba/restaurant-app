// const { DataTypes } = require('sequelize');s

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    userId: {
      type: DataTypes.NUMBER,
    },
    username: {
      type: DataTypes.STRING,
    },
    pass: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
