const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    return;
  }

  const item = document.createElement('li');
  item.className = 'todo-item';

  const label = document.createElement('span');
  label.textContent = text;
  label.addEventListener('click', () => {
    item.classList.toggle('completed');
  });

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'delete-button';
  button.textContent = 'Delete';
  button.addEventListener('click', () => {
    item.remove();
  });

  item.append(label, button);
  list.appendChild(item);

  input.value = '';
  input.focus();
});
