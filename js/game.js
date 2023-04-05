let input = document.querySelector('.input'),
btn = document.querySelector('.btn'),
gameTime = document.querySelector('.time'),
gameBox = document.querySelector('.game__box'),
btnBox = document.querySelector('.game__btn-box'),
score = 0,
time = 0,
interval = 0;


btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value > 4) {
        time = input.value;
        input.value = '';
        score = 0;
        clearInterval(interval);
        start();
        stop.style.display = 'inline-block';
        btn.classList.add('disable');
        let result = document.querySelector('.result');
        if (result) {
            result.style.display = 'none';
        }
    }
});
    
    gameBox.addEventListener('click', (event) => {
        if (event.target.classList.contains('ball')) {
            score++;
            event.target.remove();
            createBall();
        }
});

function start() {
    interval = setInterval(() => decrease(), 1000);
    createBall();
}

function decrease() {
    if(time == 0) {
        end();
    } else {
        time = --time;
        gameTime.innerHTML = time;
    }
}

function end() {
    gameBox.innerHTML = `<h2 class="result"> Вы набрали ${score} очков</h2>`;
    btn.classList.remove('disable');
    stop.style.display = 'none';
}


    let stop = document.createElement('a');
    stop.classList.add('btn-stop');
    stop.style.background = 'red';
    stop.innerHTML = 'Stop';
    stop.style.cursor = 'pointer';
    stop.style.display = 'none';
    btnBox.append(stop);
    stop.addEventListener('click', () => {
        end();
        clearInterval(interval);
        gameTime.innerHTML = 0;
    });


function createBall() {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    let size = randSize();
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.background = 'red';
    
    let cor = gameBox.getBoundingClientRect();
    let {width, height} = cor;
    
    let x = rand(0, width - size);
    let y = rand(0, height - size);
    
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    
    gameBox.append(ball);
    randColor(ball);
    randShape(ball);
}


function rand(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min);
}

let colors = ['white', 'black', 'orange', 'red', 'green', 'blue', 'yellow'];
let proportions = [40, 50, 60, 70, 80, 90, 100];
let shape = [
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
    'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
    'circle(50% at 50% 50%)'    
];

function getColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function randColor(el) {
    el.style.background = getColor();
}


function randSize() {
    let index = Math.floor(Math.random() * proportions.length);
    return proportions[index];
}

function getShape() {
    let index = Math.floor(Math.random() * shape.length);
    return shape[index];
}

function randShape(el) {
    el.style.clipPath = getShape();
}


console.log(gameBox.style);


