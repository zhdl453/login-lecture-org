//app.listen(); 모듈화 최적화해주자 www.js  이파일에
//서버 실행파일. node 서버 켜주는거임
"use strict";
const app = require('../app'); //'../': 상위 폴더로 올라가서 그 레벨단위안에있는 파일 골라준다는 뜻
//const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  console.log(`${PORT} server is running`);
    //(`${PORT} server is running`);
  });

  //package.json: