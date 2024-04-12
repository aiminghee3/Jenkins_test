const express  = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>젠킨스 클론 테스트</h2>');
});

console.log('Server running at http://localhost:80/');
app.listen(80);


// 여기에 도커 컴포즈 파일 배포용, 푸시용 두 개 만들어서 실행하기