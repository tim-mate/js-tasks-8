var throttle = require('lodash.throttle');

const refs = {
  form: document.body.querySelector('.feedback-form'),
};
const feedback = {
  email: '',
  message: '',
};
const KEY_NAME = 'feedback-form-state';

fetchPreviousData();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function fetchPreviousData() {
  const localStorageFeedback = JSON.parse(localStorage.getItem(KEY_NAME));

  if (localStorageFeedback?.email) {
    refs.form.email.value = localStorageFeedback.email;
    feedback.email = localStorageFeedback.email;
  }

  if (localStorageFeedback?.message) {
    refs.form.message.value = localStorageFeedback.message;
    feedback.message = localStorageFeedback.message;
  }
}
function onFormInput(e) {
  feedback[e.target.name] = e.target.value;
  localStorage.setItem(KEY_NAME, JSON.stringify(feedback));
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(feedback);

  clear(e);
}
function clear(e) {
  e.target.reset();
  localStorage.removeItem(KEY_NAME);
  feedback.email = '';
  feedback.message = '';
}
