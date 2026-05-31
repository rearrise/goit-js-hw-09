const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.js-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', e => {
  const input = new FormData(form);
  const data = {
    email: input.get('email'),
    message: input.get('message'),
  };
  saveLS(STORAGE_KEY, data);
});

document.addEventListener('DOMContentLoaded', () => {
  const data = loadLS(STORAGE_KEY);
  if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = new FormData(form);
  const data = {
    email: input.get('email'),
    message: input.get('message'),
  };
  console.log(data);
  if (data.email === '' || data.message === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function saveLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
function loadLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return json;
  }
}
