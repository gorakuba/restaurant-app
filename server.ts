const mysql = require('mysql2/promise');

const getFromDb = async () => {
  const connection = await mysql.createConnection({
    host: 'sql11.freesqldatabase.com',
    user: 'sql11524673',
    password: 'bCgMd4F5h6',
    database: 'sql11524673',
    port: 3306,
  });

  try {
    let response = JSON.stringify(
      await connection.query(
        'SELECT id, name, count, description, price  FROM drinks WHERE id = 2'
      )
    );

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

getFromDb();
