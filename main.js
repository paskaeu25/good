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

function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

function completeTask(e) {
  const listItem = e.target.closest(".li-container");
  if (
    e.target.classList.contains("checkbox") ||
    e.target.classList.contains("todo-text") ||
    e.target.classList.contains("task-box")
  ) {
    const span = listItem.querySelector(".todo-text");
    const checkbox = listItem.querySelector(".checkbox");
    span.classList.toggle("checked");

    if (span.classList.contains("checked")) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
}

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

  const taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.classList.add("checkbox");

  const taskTextInList = document.createElement("span");
  taskTextInList.classList.add("todo-text");
  taskTextInList.innerHTML = taskText;

  taskBox.appendChild(taskCheck);
  taskBox.appendChild(taskTextInList);

  listItem.appendChild(taskBox);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");

  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  taskInput.value = "";
}
