const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//  toDoForm.querySelector("input");  = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);  // li는 spanㅇ라는 자식을 가지게 됨 
    li.appendChild(button); //append는 마지막에!
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) { 
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
//localstorage only saves text!
toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item) {}
    
 //밑에 짧게쓰는버전이 이 함수를 안쓰고 줄이는 법!

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    //parsedToDos.forEach((item) => console.log("this is a", item)); 따로 함수 작성없이 짧게쓸수있다! arrow function
}
