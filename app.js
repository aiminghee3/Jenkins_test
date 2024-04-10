const express  = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

console.log('Server running at http://localhost:80/');
app.listen(80);
