const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

form.addEventListener('input', event => {
  const target = event.target;
  userData[target.name] = target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
});

function fillFields() {
  if (localStorage.length === 0) {
    return;
  }
  const data = localStorage.getItem(localStorageKey);
  const parsedData = JSON.parse(data);
  emailInput.value = parsedData.email || '';
  messageInput.value = parsedData.message || '';
}
fillFields();

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(localStorageKey);
  console.log(userData);
  userData = {};
});
