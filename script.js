// script.js

let todos = [];
let editIndex = -1;

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText === "") return;

    if (editIndex === -1) {
        todos.push(todoText);
    } else {
        todos[editIndex] = todoText;
        editIndex = -1;
    }

    todoInput.value = "";
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        const textSpan = document.createElement("span");
        textSpan.textContent = todo;
        li.appendChild(textSpan);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.onclick = () => editTodo(index);
        li.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTodo(index);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

function editTodo(index) {
    document.getElementById("todo-input").value = todos[index];
    editIndex = index;
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
