const connectToMongo = require('./db'); // Use the correct relative path to your db.js file
const express = require('express');
connectToMongo();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
