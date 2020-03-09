let entrada = document.getElementById("entrada");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let doneList = document.getElementById("doneList");

function delet(element) {
  doneList.removeChild(element);
}

function done(done) {
  done.removeChild(done.firstElementChild);

  let inverter = done.innerHTML;
  inverter = document.createTextNode(inverter);

  done.innerHTML = "";

  let removeBtn = document.createElement("button");
  let text = document.createTextNode("X");
  removeBtn.appendChild(text);
  removeBtn.addEventListener("click", () => delet(done));

  done.appendChild(removeBtn);
  done.appendChild(inverter);

  doneList.appendChild(done);
}

function add() {
  if (entrada.value != "") {
    let todo = document.createElement("li");
    todo.style.listStyle = "none";

    let confirm = document.createElement("input");
    confirm.type = "checkbox";
    confirm.addEventListener("click", () => done(todo));

    let text = document.createTextNode(entrada.value);

    todo.appendChild(confirm);
    todo.appendChild(text);

    todoList.appendChild(todo);

    entrada.value = "";
  }
}

addBtn.addEventListener("click", add);
