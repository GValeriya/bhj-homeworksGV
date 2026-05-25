let currentTime = 30;
let timer = document.getElementById('timer');
let counter = setInterval(countDown, 500); 
function countDown() {
    currentTime--;
    timer.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    }
}
