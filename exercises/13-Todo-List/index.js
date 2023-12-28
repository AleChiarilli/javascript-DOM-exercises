// Your code here
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos necesarios
    var addButton = document.getElementById("addToDo");
    var todoList = document.querySelector("ul");

    // Agregar evento para manejar la adición de tarea
    addButton.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && addButton.value.trim() !== "") {
            addTask(addButton.value);
            addButton.value = "";
        }
    });

    // Agregar evento para manejar la eliminación de tarea
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName === "I") {
            deleteTask(event.target.parentElement.parentElement);
        }
    });

    // Función para agregar tarea
    function addTask(taskText) {
        var newTask = document.createElement("li");
        newTask.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + taskText;
        todoList.appendChild(newTask);
    }

    // Función para eliminar tarea
    function deleteTask(taskElement) {
        taskElement.remove();
    }
});