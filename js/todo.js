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
    const li = document.createElement("p");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = `β ${newTodo.text}`;
    const button = document.createElement("button");
    button.innerText = "ππ»"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);  // liλ spanγλΌλ μμμ κ°μ§κ² λ¨ 
    li.appendChild(button); //appendλ λ§μ§λ§μ!
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
    
 //λ°μ μ§§κ²μ°λλ²μ μ΄ μ΄ ν¨μλ₯Ό μμ°κ³  μ€μ΄λ λ²!

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    //parsedToDos.forEach((item) => console.log("this is a", item)); λ°λ‘ ν¨μ μμ±μμ΄ μ§§κ²μΈμμλ€! arrow function
}
