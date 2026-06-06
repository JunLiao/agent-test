const THEME_KEY = 'theme-preference';
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

function saveTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

function getSavedTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
}

const saved = getSavedTheme();
if (saved) {
  applyTheme(saved);
} else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    saveTheme(newTheme);
  });
}

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
