"use strict";
//modules
const express = require("express");
const bodyParser = require("body-parser"); //body값을 잘 파싱해줄수 있도록 모듈을 설치해줘야함
const dotenv = require("dotenv"); //환경변수 설정할때 쓰는 모듈
const accessLogStream = require("./src/config/log");

const app = express();
dotenv.config();

//routing
const home = require("./src/routes/home");
//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //정적경로로 이제 여기 /public를 기본으로 깔아주는거임
app.use(bodyParser.json()); //제이슨파일을 파싱할수 있도록 명시해줌 //미들웨어
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
//morgan을 통해서 출력 포맷을 정리해줄수 있음
//morgan("dev")로그가 accessLogStream을 통해서 주고받게 되고, access.log에 로그가 저장됨.
app.use(bodyParser.urlencoded({ extended: true }));
//원래 app,get('/',(req,res)=>{} 이런식인데 router 폴더에다가 따로 파일 저장해서 불러올거니까
//const router = express.Router(); 해주고
//app.get()을 -> router.get()로만 바꿔주면 되는데, 이렇게 하면 여기 index.js파일에서만 쓸수 있다.
//그래서 app.js파일에서 app.use('/', home); 해줘가지고 미들웨어 등록하는 메서드 써서 연결해줘야함

app.use("/", home); //use-> method to register a "middle wear":
//'/'를 하면 home 으로 보내준다는 뜻

module.exports = app;
