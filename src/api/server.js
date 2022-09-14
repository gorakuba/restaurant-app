const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url =
  'mongodb+srv://gorakuba_:gorakuba_@cluster0.wfbbico.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

connect();

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
