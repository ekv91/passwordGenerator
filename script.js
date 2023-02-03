const btnEl = document.querySelector('.btn');
const inputEl = document.getElementById('input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContainerEL = document.querySelector('.alert-container');

btnEl.addEventListener('click', () => {
  createPassword();
});

copyIconEl.addEventListener('click', () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEL.classList.remove('active');
    setTimeout(() => {
      alertContainerEL.classList.add('active');
    }, 2000);
  }
});

function createPassword() {
  const chars =
    '1234567890QWERTZUIOPASDFGHJKLYXCVBNM,.!_=)({}qwertzuiopasdfghjklyxcvbnm';
  const passwordLength = 14;
  let password = '';
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEL.innerText = password + '  copied!';
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999); // For mobile
  navigator.clipboard.writeText(inputEl.value);
}
