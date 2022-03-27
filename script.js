const ball = document.querySelector('img');
const input = document.querySelector('input')
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
  "Tak!",
  "Nie.",
  "Może.",
  "Ciężko powiedzieć...",
  "Nie chcesz znać odpowiedzi na to pytanie... :/",
];

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 3000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
        
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi zostać zakonczone znakiem zapytania "?".';
        answer.textContent = ''
    } else {
        error.textContent = 'Musisz mi zadac pytanie!'
        answer.textContent = ''
    }

    ball.classList.remove('shake-animation');

}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Odpowiedź: </span> ${answersArr[number]}`
}


ball.addEventListener('click', shakeBall)