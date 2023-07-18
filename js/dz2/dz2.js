let arr;

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
console.log(arr);


let book1 = {
    title: 'Castle',
    pageCount: 435,
    genre: 'romance',
    authors: {
        name: 'Kafka',
        age: 234,
    }
}
let book2 = {
    title: 'Solyaris',
    pageCount: 110,
    genre: 'fantasy',
    authors: {
        name: 'Lem',
        age: 98,
    }
}
let book3 = {
    title: 'road to Heaven',
    pageCount: 227,
    genre: 'romance',
    authors: {
        name: 'Fidgerald',
        age: '127years',
    }
}
console.log(book1.title);
console.log(book1.pageCount);
console.log(book1.genre);
console.log(book1.authors.name);
console.log(book1.authors.age);


console.log(book2.title);
console.log(book2.pageCount);
console.log(book2.genre);
console.log(book2.authors.name);
console.log(book2.authors.age);

console.log(book3.title);
console.log(book3.pageCount);
console.log(book3.genre);
console.log(book3.authors.name);
console.log(book3.authors.age);

let users = [
    {name: 'igor', username: 'XIgorX', password: 'password'},
    {name: 'olya', username: 'olehandro', password: '123456789'},
    {name: 'karina', username: 'karino4ka', password: 'smily_face'},
    {name: 'gerald', username: 'witcher', password: 'witcher3'},
    {name: 'vladislav', username: 'vladick', password: 'vlad'},
    {name: 'andrii', username: 'andry', password: 'andrii1337'},
    {name: 'bogdan', username: 'bigdan', password: 'avtobus'},
    {name: 'arkadii', username: 'kesha', password: 'arkadiev'},
    {name: 'roman', username: 'makar', password: 'oskar'},
    {name: 'oleksii', username: 'oleshenka', password: 'parrol'},
]


for (const user of users) {
    if (user.name) {
        console.log(user);
    }
}


//addishinal

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//let x = +prompt("x");
// if (x === 0){
//     console.log('ok')
// }
// else{
//     console.log('not ok')
// }

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//let time = +prompt('tell me time');
// if (time >= 0 && time <= 15){
//     console.log('first')
// }
// if (time >= 15 && time <= 30){
//     console.log('second')
// }
// if (time >= 30 && time <= 45){
//     console.log('third')
// }
// if (time >= 45 && time <= 60){
//     console.log('forth')
// }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//let day = +prompt('day decade');
// if (day >=1 && day <=11){
//     console.log('1')
// }
// if (day >=11 && day <=21){
//     console.log('2');
// }
// if (day >=11 && day <=21){
//     console.log('2');
// }
// if (day >=21 && day <=31){
//     console.log('3');
// }

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//let key = 'wednesday'
// switch (key) {
//     case 'monday':
//         console.log('monday plans');
//         break;
//     case 'tuesday':
//         console.log('tuesday plans');
//         break;
//     case 'wednesday':
//         console.log('wednesday plans');
//         break;
//     case 'thursday':
//         console.log('thursday plans');
//         break;
//     case 'friday':
//         console.log('friday plans');
//         break;
//     case 'saturday':
//         console.log('saturday plans');
//         break;
//     case 'sunday':
//         console.log('sunday plans');
//         break;
// }


//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


let a = Math.random() * 100

let b = Math.random() * 100

if (a > b) {
    console.log(Math.round(a));
} else if (b > a) {
    console.log(Math.round(b));
}
else if (a === b){
        console.log('rovno');
}

