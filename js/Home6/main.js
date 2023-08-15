//// #1- Знайти та вивести довижину настипних стрінгових значень
//
// const a ='hello world';
// const b ='lorem ipsum';
// const c ='javascript is cool';
// console.log(a.length,b.length,c.length);
//
////#2- Перевести до великого регістру наступні стрінгові значення
//
// const a ='hello world';
// const b ='lorem ipsum';
// const c ='javascript is cool';
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());
//
////#3- Перевести до нижнього регістру настипні стрінгові значення
//
// const a ='HELLO WORLD';
// const b ='LOREM IPSUM';
// const c ='JAVASCRIPT IS COOL';
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());
//
////#4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str =' dirty string   ';
// console.log(str.trim());
//
////#5- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//
// let str = 'Ревуть воли як ясла повні';
// let stringToArray=(str)=>{
//     return [str];
// }
// console.log(stringToArray(str));
//
////#6- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let arr =[10,8,-7,55,987,-1011,0,1050,0]
// let str = arr.map(function (num){
//     return num.toString()
// })
// console.log(str);
//
//
////#7- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//// let nums = [11,21,3];
//// sortNums(nums,'ascending') // [3,11,21]
//// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
//
// let sortNums = nums.sort((a,b)=>{
//     return a-b;
// });
// console.log(sortNums);
// console.log(sortNums.reverse());
//
////#8- є масив
//  -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sort = coursesAndDurationArray.sort((a, b) => {
//     return a.monthDuration - b.monthDuration;
// });
// console.log(sort);
// let filter =coursesAndDurationArray.filter(courseAndDurationArray => courseAndDurationArray.monthDuration > 5);
// console.log(filter);
//
////#9 описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// const Cards = [
//     {cardSuit: 'spade' && 'diamond' && 'heart' && 'clubs'},
//     {value: '6' && '7' && '8' && '9' && '10' && 'ace' && 'jack' && 'queen' && 'king' && 'joker'},
//     {color: 'red' && 'black'},
// ]
//
// const Cards = [
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'heart', value: 'joker', color: 'red'},
//     {cardSuit: 'spade', value: 'joker', color: 'black'},
//     {cardSuit: 'diamond', value: 'joker', color: 'red'},
//     {cardSuit: 'clubs', value: 'joker', color: 'black'},
// ];

// const jS = Cards.filter(card => card.value === 'joker' && card.cardSuit ==='spade')
// console.log(jS);
// const six = Cards.filter(card => card.value === '6')
// console.log(six);
// const redCards = Cards.filter(card => card.color === 'red')
// console.log(redCards);
// const diamond = Cards.filter(card => card.cardSuit === 'diamond')
// console.log(diamond);
// const last = Cards.sort((a, b) => a.value - b.value);
// const newlast = Cards.filter(card => card.value >= '9' && card.cardSuit === 'clubs')
// console.log(newlast);
