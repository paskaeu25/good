// Grab elements
const todoForm = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const errorMsg = document.querySelector(".error-message");

// Event Listeners
todoForm.addEventListener("submit", handleFormSubmit);
taskList.addEventListener("click", handleTaskClick);

// Functions
function handleFormSubmit(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    displayErrorMessage("Oops, you forgot to enter the task 😆");
  } else {
    addTaskToList(taskText);
    saveData();
  }
}

function displayErrorMessage(message) {
  errorMsg.textContent = message;
}

function addTaskToList(taskText) {
  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");

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
  displayErrorMessage("");
}

function handleTaskClick(e) {
  if (e.target.classList.contains("delete")) {
    deleteTask(e.target.parentElement);
    saveData();
  } else {
    toggleTaskComplete(e.target);
    saveData();
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}

function toggleTaskComplete(element) {
  const listItem = element.closest(".todo-item");
  listItem.classList.toggle("checked");
}

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function getData() {
  taskList.innerHTML = localStorage.getItem("data");
}

getData();
