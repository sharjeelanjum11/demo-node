// Importing necessary modules
const express = require('express');

// Creating an instance of express app
const app = express();

// Setting up a basic route
app.get('/', (req, res) => {
  res.send('Hello, I am Sharjeel');
});

// Starting the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
