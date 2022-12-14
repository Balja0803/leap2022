let inputGuess = document.getElementsByClassName('guess')[0];
let randomNumber = Math.floor(Math.random() * 19) + 1;
let showNumber = document.getElementsByClassName('number')[0];
let btn = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('score');
btn.addEventListener('click', () => {
  showNumber.innerText = `${inputGuess.value}`; // shows number that is in input
});

btn.addEventListener('click ', checkIfRight);
console.log(randomNumber);
function checkIfRight(number) {
  if (inputGuess == randomNumber) {
    message.innerText = 'Зөв таалаа';
    document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347';
  } else if (inputGuess !== randomNumber) {
    score.innerText = `${score.value - 1} `;
  }
}
