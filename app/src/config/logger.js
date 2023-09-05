// const { createLogger, transports, format } = require("winston");
// const { combine, timestamp, printf, label, simple, colorize } = format;
// const printFormat = printf(({ timestamp, label, level, message }) => {
//   //사용하고싶은 변수들을 오브젝트로 담아서 보내줄수 있음
//   return `${"시간: " + timestamp} [${label}] ${level} : ${message}`;
// }); //json()파일형식은 colorize()랑 같이 붙으면 오류남.
// const printLogFormat = {
//   file: combine(
//     label({
//       label: "백엔드 맛보기",
//     }),
//     //colorize(), new transports.File로 파일 저장할땐 이 컬러라이즈 없애야 오류안뜸
//     timestamp({
//       format: "YYYY-MM-DD HH:mm:dd",
//     }),
//     printFormat
//   ),
//   console: combine(colorize(), simple()),
// };

// const opts = {
//   file: new transports.File({
//     filename: "access.log",
//     dirname: "./logs", //이렇게 경로 설정해주면 따로 filename:./logs/access.log쓸 필요없음
//     level: "info",
//     format: printLogFormat.file,
//   }),
//   console: new transports.Console({
//     level: "info",
//     format: printLogFormat.console,
//   }),
// };

// const logger = createLogger({
//   transports: [opts.file],
// }); //transports라는 키값에 배열을 넣어줌.

// if (process.env.NODE_ENV !== "production") {
//   //production: 실제 서비스 중인 서버라는뜻
//   logger.add(
//     new transports.Console({
//       //logger.add()로 추가해주는거임.
//       level: "info",
//       format: printLogFormat,
//     })
//   );
// }

// logger.stream = {
//   write: (message) => logger.info(message),
// };
// module.exports = logger;
