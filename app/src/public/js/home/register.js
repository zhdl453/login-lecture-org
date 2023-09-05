"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"), //#:태그에 id로 되어있는걸 가지고 왔다라는뜻
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirmPsword"),
  registerBtn = document.querySelector("#button");
console.log("hello register");
registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(psword.value !== confirmPsword.value)
    return alert("비밀번호가 일치하지 않습니다.");
  
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch("/register",{ 
    method: "POST",
    headers: {
      "Content-Type": "application/json", //데이터 형식이 제이쓴형식이라는것을 알려줌
    }, //두번째 파라미터로 전달할 데이터를 보내줄 수 있음.오브젝트의 형태로 보내줘야함
    body: JSON.stringify(req), //제이슨 데이터 타입을 이용해 데이터를 전달할거니까 제이쓴 형태로 감싸줘야함
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/login";
    }else {
      console.log(".then(!success)하면 찍히게");
      alert(res.msg);
    }
  })
  .catch((error) => {
    console.error(new Error("회원가입 중 오류발생"));
  }); //fetch가 있어야 html에 들어온 데이터를 서버로 전달해줄수 있음
}