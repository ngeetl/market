const express = require('express')
const app = express()

// CORS 허용 middleware
app.use(express.static('build'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(4000, () => {
    console.log("Server is running!");
})



// 실행 방법 : market -> cd client -> npm ci -> npm run build -> build 폴더를 server 폴더의 하위로 이동 -> node app.js 