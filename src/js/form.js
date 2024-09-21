import '../css/style.css';

const STORAGEKEY = 'feedback-form-state';
const formElement = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

formElement.elements.email.value = formData.email ?? '';
formElement.elements.message.value = formData.message ?? '';
formElement.addEventListener('input', handleInput);
formElement.addEventListener('submit', handleSubmit);

function handleInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGEKEY, JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  console.log(email);
  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGEKEY);
}
