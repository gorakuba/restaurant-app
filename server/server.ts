require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const database = require('./models');
const Role = database.roles;

const app = express();
let corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

// register route
app.post('/register', async (req: any, res: any) => {
  const { id, username, password, email } = req.body;

  // const user = {
  //   userId: id,
  //   username: username,
  //   pass: password,
  //   email: email,
  // };

  // UserModel.create(user)
  //   .then(() => {
  //     res.send('user registered!', user);
  //   })
  //   .catch((err: any) => {
  //     console.error(err);
  //   });
});

// login route
app.get('/login', async (req: any, res: any) => {
  // const { username, password } = req.body;
  // try {
  //   databaseConn.getConnection((err: any, connection: any) => {
  //     if (err) throw err;
  //     console.log('database connected!');
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
});

database.sequelize.sync().then(() => {
  initial();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});

const initial = () => {
  Role.create({
    id: 1,
    name: 'admin',
  });

  Role.create({
    id: 2,
    name: 'user',
  });
};
