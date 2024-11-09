// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route to handle GET requests to /comments
// 4. Send back the comments from the comments.json file
// 5. Listen on port 3000
// 6. Run the server

// 1. Import express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Create a route to handle GET requests to /comments
app.get('/comments', (req, res) => {
  // 4. Send back the comments from the comments.json file
  res.sendFile(__dirname + '/comments.json');
});

// 5. Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 6. Run the server
// node comments.js

// http://localhost:3000/comments
// [{"id":1,"body":"This is a comment"},{"id":2,"body":"This is another comment"}]