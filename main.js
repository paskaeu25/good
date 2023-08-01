const todoForm = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") alert("Please enter a task!");

  const li = document.createElement("li");
  li.innerHTML = taskText;
  taskList.appendChild(li);

  taskInput.value = "";
}
