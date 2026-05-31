const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', e => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  saveLS(STORAGE_KEY, formData);
});

function initForm() {
  const saved = loadLS(STORAGE_KEY);

  if (saved) {
    formData.email = saved.email || '';
    formData.message = saved.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  
  formData.email = '';
  formData.message = '';
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
