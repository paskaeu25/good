// Grab elements
const todoForm = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

// Event Listeners
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completeTask);

// Functions
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("li-container");

  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");

  const taskTextInList = document.createElement("span");
  taskTextInList.classList.add("todo-text");
  taskTextInList.innerHTML = taskText;

  taskBox.appendChild(taskTextInList);

  listItem.appendChild(taskBox);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");

  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  taskInput.value = "";
  saveData();
}

function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  }
}

function completeTask(e) {
  const listItem = e.target.closest(".li-container");
  const targetClass = e.target.classList;

  if (
    targetClass.contains("li-container") ||
    targetClass.contains("task-box") ||
    targetClass.contains("todo-text")
  ) {
    listItem.classList.toggle("checked");
  }
  saveData();
}

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function getData() {
  taskList.innerHTML = localStorage.getItem("data");
}

getData();
