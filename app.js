const toggleButton = document.querySelector('.toggle-btn')
const mainHeader = document.querySelector('.main-header')
const overlay = document.querySelector('.overlay')

toggleButton.addEventListener('click', function (e) {
   toggleButton.classList.toggle('open');
   mainHeader.classList.toggle('open');
   overlay.classList.toggle('open');
});