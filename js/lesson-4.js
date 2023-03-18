// a

let username = prompt('Имя');
let birthYear = +prompt('Год рождения');
let currentYear = +prompt('Нынешний год');

function string(one, two, three) {
    let res = (one + ', Ваш возраст: ' + (two - three));
    return res;
}

console.log(string(username, currentYear, birthYear));



// b

let amount = +prompt('Кол-во примеров?');
let answer;

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


for (let i = 0; i < amount; i++) {
    let mark = rand(1,4);

    switch(mark) {
        case 1:
            mark = '+';
            break;
        case 2:
            mark = '-';
            break;  
        case 3:
            mark = '*';
            break;
        case 4:
            mark = '/';
            break;
    }

    let one = rand(1,10);
    let two = rand(1,10);

    let res;
    if (mark == '+') {
        res = one + two;
    } else if (mark == '-') {
        res = one - two;
    } else if (mark == '*') {
        res = one * two;
    } else if (mark == '/') {
        res = one / two;
    }

    answer = +prompt(`${one}${mark}${two}`);
    
    if (answer == res) {
        console.log(`Ваш ответ верный - ${res}`);
    } else if (answer !== res) {
        console.log(`Ваш ответ неверный - ${answer}, Правильный ответ ${res}`);
    }
}
