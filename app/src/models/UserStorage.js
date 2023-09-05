"use strict";
const db = require("../config/db");
//const { reduce } = require("async");
//클래스로 만들고, 보통 파일명이랑 같게 해줌. 유저 정도 여기 클래서에 담아줄거인
class UserStorage {
  //users를 static으로 전역변수로 만들어주면 클래스 UserStorage가 접근가능함. home.ctrl.js파일에서
  //const userStorage = new UserStorage();
  //console.log(UserStorage.users); 이렇게 해줄 필요가 없어짐

  static getUserInfo(id) {
   return new Promise((resolve, reject)=>{
      const query = "SELECT * FROM login WHERE id =?;";
      db.query(query,[id], (err, data)=>{ //두번째 파라미터로 콜백함수를 던질수있는데, 첫번째는 err, 두번째는 읽었던 data
        if(err) reject(`${err}`); // 실패시 reject를 리턴하고 //오브젝트 객체로 값이 들어오니까 값만 들어오게 백틱으로 감싸줌
        resolve(data[0]); //성공시 resolve를 리턴한다. //이 데이터는 지금 배열로 감싸져 있다. 그래서 data[0]로해서 값만 들고와야함
      });
    });
  }
  static async save(userInfo){
    return new Promise((resolve, reject)=>{
      const query = "INSERT INTO login(id, name, psword) VALUES(?,?,?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.psword ],
        (err)=>{ //두번째 파라미터로 콜백함수를 던질수있는데, 첫번째는 err, 두번째는 읽었던 data
          if(err) reject(`${err}`); // 실패시 reject를 리턴하고
          resolve({success:true}); //성공시 resolve를 리턴한다. //이 데이터는 지금 배열로 감싸져 있다. 그래서 data[0]로해서 값만 들고와야함
      });
    });
  }
}
module.exports = UserStorage;
