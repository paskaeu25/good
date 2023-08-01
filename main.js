const todoForm = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.appendChild(checkbox);
  li.innerHTML += ` ${taskText}`;

  taskList.appendChild(li);

  taskInput.value = "";
}
