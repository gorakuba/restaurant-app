const databaseConn = require('../config/database.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  databaseConn.DB,
  databaseConn.USER,
  databaseConn.PASSWORD,
  {
    host: databaseConn.HOST,
    dialect: databaseConn.dialect,
    operationsAliases: false,
    pool: {
      max: databaseConn.pool.max,
      min: databaseConn.pool.min,
      acquire: databaseConn.pool.acquire,
      idle: databaseConn.pool.idle,
    },
  }
);

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
});
db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
});

db.ROLES = ['user', 'admin'];

module.exports = db;
