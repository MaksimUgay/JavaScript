// a

function a () {
    let userBase = {

    };
    
    let username;
    let age;
    
    for (let i = 1; i <= 10; i++) {
        switch (i) {
            case 1:
                username = prompt('Введите имя Пользователя 1');
                age = +prompt('Введите возраст Пользователя 1');
                userBase['1'] = {
                    userOne: `${username}`,
                    userOneAge: `${age}`
                };
                break;
            case 2:
                username = prompt('Введите имя Пользователя 2');
                age = +prompt('Введите возраст Пользователя 2');
                userBase['2'] = {
                    userTwo: `${username}`,
                    userTwoAge: `${age}`
                };
                break;
            case 3:
                username = prompt('Введите имя Пользователя 3');
                age = +prompt('Введите возраст Пользователя 3');
                userBase['3'] = {
                    userThree: `${username}`,
                    userThreeAge: `${age}`
                };
                break;
            case 4:
                username = prompt('Введите имя Пользователя 4');
                age = +prompt('Введите возраст Пользователя 4');
                userBase['4'] = {
                    userFour: `${username}`,
                    userFourAge: `${age}`
                };
                break;
            case 5:
                username = prompt('Введите имя Пользователя 5');
                age = +prompt('Введите возраст Пользователя 5');
                userBase['5'] = {
                    userFive: `${username}`,
                    userFiveAge: `${age}`
                };
                break;
            case 6:
                username = prompt('Введите имя Пользователя 6');
                age = +prompt('Введите возраст Пользователя 6');
                userBase['6'] = {
                    userSix: `${username}`,
                    userSixAge: `${age}`
                };
                break;
            case 7:
                username = prompt('Введите имя Пользователя 7');
                age = +prompt('Введите возраст Пользователя 7');
                userBase['7'] = {
                    userSeven: `${username}`,
                    userSevenAge: `${age}`
                };
                break;
            case 8:
                username = prompt('Введите имя Пользователя 8');
                age = +prompt('Введите возраст Пользователя 8');
                userBase['8'] = {
                    userEight: `${username}`,
                    userEightAge: `${age}`
                };
                break;
            case 9:
                username = prompt('Введите имя Пользователя 9');
                age = +prompt('Введите возраст Пользователя 9');
                userBase['9'] = {
                    userNine: `${username}`,
                    userNineAge: `${age}`
                };
                break;
            case 10:
                username = prompt('Введите имя Пользователя 10');
                age = +prompt('Введите возраст Пользователя 10');
                userBase['10'] = {
                    userTen: `${username}`,
                    userTenAge: `${age}`
                };
                break;
        }
    }
    
    console.log(userBase);
}




