window.onload = function () {
  const addBtn = document.getElementById("AddToDo");
  const tasksContainer = document.getElementById("Tasks");
  const input = document.querySelector("#newTodo input");
  addBtn.addEventListener("click", function () {
    const todoText = input.value.trim();

    if (todoText === "") {
      alert("Please enter a todo!");
      return;
    }
    const todoDiv = document.createElement("div");
    todoDiv.className = "task";
    const taskText = document.createElement("span");
    taskText.textContent = todoText;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function () {
      tasksContainer.removeChild(todoDiv);
    });
    todoDiv.appendChild(taskText);
    todoDiv.appendChild(removeBtn);
    tasksContainer.appendChild(todoDiv);
    input.value = "";
  });
};
