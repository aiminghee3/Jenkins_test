const express  = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>젠킨스 테스트입니다.</h2>');
});

console.log('Server running at http://localhost:80/');
app.listen(80);
