let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = ['red', 'orange', 'blue', 'green', 'black', 'grey', 'hotpink', 'purple', 'white', 'yellow', 'lightgreen', 'maroon', 'khaki', 'brown', 'navy', 'indigo']
const grid = document.getElementById('grid');
const targetColorDisplay = document.getElementById('target-color');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

function getRandomColor(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function shuffleArray(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleGridClick(clickedColor){
    if(clickedColor === targetColor){
        score++;
        scoreDisplay.textContent = score;
        createGrid();
    }
}

function createGrid(){
    grid.innerHTML = "";
    colors = shuffleArray(colors);
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    targetColorDisplay.textContent = targetColor;
    colors.forEach(color => {
        const box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = color;
        box.addEventListener('click', () => {
            handleGridClick(color);
        });
        grid.appendChild(box);
    });
}

function startGame(){
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    createGrid();
    clearInterval(timer)
    timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;
        if(time === 0){
            clearInterval(timer);
            alert('⌛Time up! Your score is: ' + score);
        }
    }, 1000);
}