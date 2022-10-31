const dbConn = require('../config/db.config');
const mysql = require('mysql');

module.exports = mysql.createConnection(dbConn);
