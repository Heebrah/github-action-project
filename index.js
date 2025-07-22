// Example: index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a GET route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
