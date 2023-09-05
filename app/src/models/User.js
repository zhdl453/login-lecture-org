"use strict";
const {reponse} = require("express");
const UserStorage = require("./UserStorage");

class User{
    constructor(body) { //생성자 만들때 씀.여기서 body를 받을거임.그래서 constructor(body)만듦
        this.body = body; //그러면 constructor(body)의 body가 => this.body의 (유저의 body)에 들어가는거임
    } 

    async login(){
        try{
            const client = this.body;//UserStorage가 반환해주는게 없으니까 id,psword가 없는거임. 그래서 그냥 const{id,psword} 지워버려ㅇㅇ
            const user = await UserStorage.getUserInfo(client.id); //getUsers(id,psword): id랑 psword라는 필드값을 가져오겠다는뜻 //id,psword만 받아왔음. 이름도 받고싶으면 {id, psword, name}이라고 하면됨.
            // 데이터를 다 읽어올때까지 기다리게 하는게 await인데 항상 promise를 반환하는 애한테만 쓸수 있는거 명심!
            if(user){
                if(user.id === client.id && user.psword === client.psword){
                    return {success:true};//=> UserStorage에 있는 id,pw가 유저가 쓴 id,pw가 같다면
                    }
                return {success:false, msg:"비밀번호가 틀렸습니다."};
            }
            return {success:false, msg:"존재하지 않는 아이디입니다."};  
        }catch(err){
            return {success:false, err};
        }
    }// 변수로 받을 수 있지만, 나는 오브젝트로 그냥 바로 id,psword변수에 받아버리기 위해서 const {id,psword}해줌

   async register(){
        try{
            const client = this.body;
            const response = await UserStorage.save(client); //constructor(body)에서 받은 유저의 바디가 UserStorage에 저장되는거임
            return response;
        } catch(err){
            return {success:false, err};
        }
    }
}
module.exports = User; //밖에서 사용할수 있도록 export해줌

//const user = new User(req.body);라는 클래스를 만들때 인스턴스로 만듦
//이 클래스 형태가 req.body를 기본적으로 갖고 있도록 만들어줄거임. 왜? => 클라이언트 유저 특성을 갖도록 만들거기 때문