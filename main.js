/** Tareas:
 * 1. Crear una lista de tareas
 * 2. Agregar una tarea a la lista
 * 3. Borrar una tarea de la lista
 */

// Elementos del dom
const taskElements = document.getElementById("todo-list");
const input = document.getElementById("todo");
const button = document.getElementById("btn-add");

// Tarea nueva y lista de tareas
let newTask = "";
let taskList = [];

// Función para agregar una tarea
function addTask() {
  if (newTask === "") return;

  // Añadir la nueva tarea a nuestra lista
  taskList.push(newTask);

  // Clear the input
  input.value = "";
  newTask = "";

  // actualizar la lista de tareas en el DOM
  updateTaskList();
}

// Función para crear el botón de borrar
function createDeleteButton(index) {
  // se crea el elemento del DOM
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`; // Contenido del botón
  deleteButton.classList.add("delete"); // Se agrega la clase delete

  // Se agrega el evento click al botón de borrar
  deleteButton.addEventListener("click", () => {
    // Se elimina la tarea de la lista
    taskList.splice(index, 1);

    // Se actualiza la lista de tareas en el DOM
    updateTaskList();
  });
  return deleteButton;
}

// Función para actualizar la lista de tareas en el DOM
function updateTaskList() {
  // Clear the current task list display
  taskElements.innerHTML = "";

  // Add each task to the display
  taskList.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.innerText = task;

    // Add a delete button to the task element
    const deleteButton = createDeleteButton(index);
    // Agregar al dom
    taskElement.appendChild(deleteButton);
    taskElements.appendChild(taskElement);
  });
}

input.addEventListener("change", (e) => {
  newTask = e.target.value;
});

button.addEventListener("click", () => {
  addTask();
});
