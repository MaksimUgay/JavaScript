// a

let a = +prompt('Введите число');
let b = +prompt('Введите степень');
let result = a ** b;

alert(a + ' в степени ' + b + ' равно: ' + result);


let amount = +prompt('Кол-во ступенек');
let indent = prompt('Символ отступов');
let final = prompt('Конечный символ');
let indentRes = '';
let res;

for (let i = 0; i < amount; i++) {
    indentRes += indent;
    res = indentRes + final;
    console.log(res);
} if (amount == 0) {
    console.log(final);
}


