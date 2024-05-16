const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const todos = [];

function newTodo() {
  const task = prompt('Enter a new task:');
  if (task) {
    todos.push({ task, checked: false });
    render();
    updateCounter();
    console.log('Task added:', task);
  }
}

function renderTodo(todo, index) {
  return `<li class="list-group-item">
            <input type="checkbox" class="form-check-input me-2" id="${index}" onclick="checkTodo(${index})" ${todo.checked ? 'checked' : ''}>
            <label for="${index}" class="${todo.checked ? 'text-success text-decoration-line-through' : ''}">${todo.task}</label>
            <button class="btn btn-danger btn-sm float-end" onclick="deleteTodo(${index})">Delete</button>
          </li>`;
}

function render() {
  const todoListHTML = todos.map((todo, index) => renderTodo(todo, index)).join('');
  list.innerHTML = todoListHTML;
}

function updateCounter() {
  itemCountSpan.textContent = todos.length;
  const uncheckedCount = todos.filter(todo => !todo.checked).length;
  uncheckedCountSpan.textContent = uncheckedCount;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
  updateCounter();
}

function checkTodo(index) {
  todos[index].checked = !todos[index].checked;
  render();
  updateCounter();
}
