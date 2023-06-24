const btnRed = document.getElementById('btn-red');
const btnWhite = document.getElementById('btn-white');
const btnBlue = document.getElementById('btn-blue');
const btnYellow = document.getElementById('btn-yellow');

btnRed.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

btnWhite.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

btnBlue.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});

btnYellow.addEventListener('click', () => {
  document.body.style.backgroundColor = 'yellow';
});
