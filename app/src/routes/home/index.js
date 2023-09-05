"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl'); //저기 경로로 가게 외부모듈로 연결

//원래 app,get('/',(req,res)=>{} 이런식인데 router 폴더에다가 따로 파일 저장해서 불러올거니까
//const router = express.Router(); 해주고
//app.get()을 -> router.get()로만 바꿔주면 되는데, 이렇게 하면 여기 index.js파일에서만 쓸수 있다.
//그래서 app.js파일에서 app.use('/', home); 해줘가지고 미들웨어 등록하는 메서드 써서 연결해줘야함

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login); //처리한다는 의미의 process로 이름 지어줄거임.(이건 맘대로 바꿔도 됨. 변수이름이니까ㅇㅇ)
router.post("/register", ctrl.process.register); 
//hello,login => 이전으로 되감아서 컨트롤러 기능을 갖는  '콜백 함수'를 복사하려는 것입니다.

module.exports = router;
