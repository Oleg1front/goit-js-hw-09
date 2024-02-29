const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const userData = {
  email: '',
  message: '',
};

const data = JSON.parse(localStorage.getItem(userData) ?? {});

emailInput.value = data.email.value || '';
messageInput.value = data.message.value || '';

form.addEventListener('input', event => {
  const target = event.target;
  if (target.tagName === 'INPUT') {
    userData.email = target.value;
  } else {
    userData.message = target.value;
  }
  localStorage.setItem(userData, JSON.stringify(userData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  console.log(userData);
});
