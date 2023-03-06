// a

let age = +prompt('Введите ваш возраст');

if (age <= 18) {
    alert('Вы еще молоды, вам нужно учиться');
} else if (age > 18 && age <= 50 ) {
    alert('Вам нужно работать');
} else if (age > 50 && age <= 59 ) {
    alert('Вам скоро на пенсию');
} else if (age > 59 && age <= 100 ) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так');
}

// b 

let time = +prompt('Введите время');

switch (true) {
    case (time > 0 && time <= 6):
        alert(time + ' часа ночи');
        break;
    case (time > 6 && time <= 10):
        alert(time + ' часов утра');
        break;
    case (time > 10 && time <= 17):
        alert(time + ' часа дня');
        break;
    case (time > 17 && time <= 23):
        alert(time + ' часов вечера');
        break;
    default: alert('Что-то пошло не так');
}

// c 

let a = +prompt('Число a');
let b = +prompt('Число b');
let c = +prompt('Число c');

if ((a > b && a < c)  || (a < b && a > c)) {
    alert('Среднее число A: ' + a);
} else if ((b > a && b < c) || (b < a && b > c)) {
    alert('Среднее число B: ' + b);
} else if ((c > b && c < a) || (c < b && c > a)) {
    alert('Среднее число C: ' + c);
} else {
    alert('Что-то пошло не так');
}
