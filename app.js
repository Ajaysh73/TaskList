// Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

// function loadEventListeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  // create li element
  const li = document.createElement("li");

  // add className
  li.className = "collection-item";

  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  console.log(li);
  // create new link element

  // add class
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //clear input
  taskInput.value = "";
  e.preventDefault();
}