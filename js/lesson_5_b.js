// b

function b() {

    let obj = receipt();
    console.log(obj);


let delivery = 9000;
let menu = `Вы заказали`;
let orderResult = 0;

for (let key in obj) {
        // for (let newKey in obj[key]) {
         
        // }
    orderResult += obj[key].price;
    menu += ` ${key} ${obj[key].info},`;
}
orderResult += delivery;

console.log(`${menu} | Общая стоимость ${orderResult} сум с доставкой (${delivery})`);

}













