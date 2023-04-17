// https://youtu.be/x7WJEmxNlEs
const startingMinutes = 10;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('countdonw')

// Llama a la funcion cada 1.000 milisegundos. 
setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' +  seconds : seconds;


    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--; 
}