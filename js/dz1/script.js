let arr = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
console.log(arr [0])
console.log(arr [1])
console.log(arr [2])
console.log(arr [3])
console.log(arr [4])
console.log(arr [5])
console.log(arr [6])
console.log(arr [7])
console.log(arr [8])
console.log(arr [9])
console.log(arr [10])
console.log(arr [11])
console.log(arr [12])


let person = {
    firstName: 'Viktor',
    middleName: 'Broflovski',
    lastName: 'Yaroslavovish',
}
let person2 = {...person};
person2.firstName = 'Igor'
console.log(person.firstName, '23456');
console.log(person2.firstName, '23456');
console.log(person.middleName);
console.log(person.lastName);


let a = 100;
let b = '100';
let c = true;
let d = 100;
let e = '100';
let f = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)

// зверху таск, знизу адішниал

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

const height = 23;
const width = 10;
console.log(height*width);

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
const heightC = 10;
const dC = 4;
console.log(heightC*dC*dC);

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(n ** 2 + m ** 2);
console.log(k)

//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

console.log(5 < 6);
console.log(5 == 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(10 >= 10);
console.log(10 <= 10);
console.log(10 !== 10);
console.log(10 != 10);
console.log(10 < 10);
console.log(123 === '123');
console.log(123 == '123');



//error
let a1 = 100;
let b1 = 500;
let c1 = "hello";
let d1 = "okten";
let x1 = 'constant value';
{
    console.log(a1);
    x1 = 'new value';
}
let y = 'new value';

let result = 100 + y;

console.log(result);

