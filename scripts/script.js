let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let doneList = document.getElementById("doneList");

function deletE(element) {
  doneList.removeChild(element);
}

function donE(todoElement, text) {
  todoList.removeChild(todoElement);
  let doneElement = document.createElement("li");
  let removeBtn = document.createElement("button");
  let X = document.createTextNode("X");

  removeBtn.appendChild(X);
  removeBtn.addEventListener("click", () => deletE(doneElement));
  doneElement.appendChild(removeBtn);
  doneElement.appendChild(text);
  doneList.appendChild(doneElement);
}

function adD() {
  if (todoInput.value != "") {
    let todoElement = document.createElement("li");
    let todoText = document.createTextNode(todoInput.value);
    let doneBtn = document.createElement("input");

    todoElement.style.listStyle = "none";
    doneBtn.type = "checkbox";
    todoInput.value = "";

    doneBtn.addEventListener("click", () => donE(todoElement, todoText));

    todoElement.appendChild(doneBtn);
    todoElement.appendChild(todoText);
    todoList.appendChild(todoElement);
  }
}

addBtn.addEventListener("click", adD);
