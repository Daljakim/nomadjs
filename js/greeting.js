/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); //loginform에서 찾을 수 있어(정밀조사가능)
const loginButton = loginForm.querySelector("Button");
*/ // 이걸 조금 더 짧게 표현하고 싶다면 아래처럼 구현하면 된다!
/*
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginBtnClick() {
    console.log("click!!"); 
  /*console.dir(loginInput) //콘솔에서 보면 내 인풋안에 저장되어있는 밸류를 찾을 수 있지
  //console.log(loginInput.value);
  //console.log("click!!");
  const username = loginInput.value;
  if(username === "") {
      alert("Please write your name.");
  } else if (username.length > 15) {  //string.length-> string의 길이를 알려줄거야
      alert("Your name is too long.");
  } 
  // 이것처럼 해도 되지만 이미 html의 form - input에 들어있는 기능이다. 
 // 이왕이면 이미 만들어져있는 기능을 쓰는게 낫겠지? html파트로 가서 폼안에 인풋을 넣어 고쳐보자!
}

loginButton.addEventListener("click", onLoginBtnClick);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link= document.querySelector("a");

function onLoginSubmit(event) { //submit은 엔터 혹은 클릭했을때 발생한다.
    event.preventDefault();
    console.log(loginInput.value); 
}

function handleLinkClick(event){
   event.preventDefault(); //이 함수로 브라우저의 기본기능을 못하도록 할 수 있어
   console.dir(event);
   alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);  
*/


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "usename";
const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 표함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.


function onLoginSubmit(event) { //submit은 엔터 혹은 클릭했을때 발생한다.
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY , username);
    loginForm.classList.add(HIDDEN_CLASSNAME); 
   // greeting.innerText = "Hello " + username;
   // greeting.innerText = `Hello ${username}`; //string과 변수를 합쳐주네 윗줄과 같은 효과! 근데 좀 간지남ㅋ 
   // greeting.classList.remove(HIDDEN_CLASSNAME)
   //함수를 만들어서 코드를 더 줄여줬다 paintGreetings
   paintGreetings(username); 
}
 function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add("hellouser");
 }
 
const savedUsername = localStorage.getItem(USERNAME_KEY );

if(savedUsername === null ) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
   paintGreetings(savedUsername);
}
 