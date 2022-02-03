const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// () to String => JSON.stringify()
// String to Object => JSON.parse()

// delete
function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  saveToDo();
}
// save
function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// li 출력
function paintToDo(item) {
  const li = document.createElement("li");
  li.id = item.id;
  const span = document.createElement("span");
  span.innerText = item.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 추가
function toDoSubmit(event) {
  event.preventDefault();
  const newItem = toDoInput.value;
  toDoInput.value = "";

  // key:value로 array 추가
  const toDoObj = { id: Date.now(), text: newItem };

  // 배열에 추가
  toDos.push(toDoObj);
  // 화면에 뿌리기
  paintToDo(toDoObj);
  // localStorage 추가
  saveToDo();
}

// 초기로딩시
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => {
    paintToDo(item);
  });
}

toDoForm.addEventListener("submit", toDoSubmit);
