const loginBtn = document.getElementById('login');
const closeBtn = document.getElementById('close');
const popup = document.getElementById('popup');

function togglePopup() {
  popup.classList.toggle('active');
}

function deletePopup(e) {
  if (e.target == popup) {
    popup.classList.remove('active');
  }
}

loginBtn.addEventListener('click', togglePopup);
closeBtn.addEventListener('click', togglePopup);
document.addEventListener('click', deletePopup);

console.log(popup);
