//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let one = 'hello';
// console.log(one);
// let two = 'owo';
// console.log(two);
// let tree = 'com';
// console.log(tree);
// let four = 'owo';
// console.log(four);
// let five = 'ua';
// console.log(five);
// let six = 1;
// console.log(six);
// let seven = 10;
// console.log(seven);
// let eight = -999;
// console.log(eight);
// let nine = 123;
// console.log(nine);
// let ten = 3.14;
// console.log(ten);
// let eleven = 2.7;
// console.log(eleven);
// let twelve = 16;
// console.log(twelve);
// let thirteen = true;
// console.log(thirteen);
// let fourteen = false;
// console.log(fourteen);
//
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// let person = {
//     name: 'Viktor',
//     mid: 'Broflovski',
//     last: 'Bogdanovich'
// }
// console.log(person.name + ' ' + person.mid + ' ' + person.last);
//
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
//
// let a = 100;
// console.log(typeof (a));
// let b = '100';
// console.log(typeof (b));
// let c = true;
// console.log(typeof (c));
//
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль
//
// let firstname = prompt('Type Your First Name')
// document.write(`<div>${firstname}</div>`);
// let midname = prompt('Type Your Mid Name')
// document.write(`<div>${midname}</div>`);
// let lastname = prompt('Type Your Last Name')
// document.write(`<div>${lastname}</div>`);
// let age = prompt('Type Your age')
// document.write(`<div>${age}</div>`);
//
//
//- Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок,
// жанр, автори. Вивести кожну книгу як окремий об'єкт
//
// let book1 = [
//     {name: 'process'},
//     {page: '310'},
//     {janre: 'fantasy'},
//     {author: 'Kafka'}
// ]
// console.log(book1);
//
//- Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
//
// let books = {
//     name: 'solyaris',
//     page: 115,
//     janre: 'fantasy'
// }
// console.log(typeof (books.name));
// console.log(typeof (books.page));
// console.log(typeof (books.janre));
//
//- Створити об'єкт book з наступними полями :
//              назва, (тип string)
//              кількість сторінок (числовий тип),
//              жанр (string)
//              автори (тип - масив, кожен елемент масиву - це стрінга)
//
// let book = {
//     name: 'zamok',
//     pages: 500,
//     janre: 'fantasy',
//     authors: [
//         {author:'Kafka',
//             author2: 'Some Australian guy'
//         }
//     ]
// }
// console.log(book);
//
//Adishinal
//
// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height)
// та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
//
// let height = 23;
// let width = 10
// let s = height*width
// console.log(s);
//
//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.
//
// let v = Math.round((3.14*4*10));
// console.log(v);
//
//У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати
//функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
// let k = Math.sqrt(3**2 + 4**2)
// console.log(k);
//
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//
// console.log(5 <= 6);
// console.log(5 >= 6);
// console.log(5 === 6);
// console.log(5 > 6);
// console.log(10 === 10);
// console.log(10 == 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(10 !== 10);
// console.log(123 === '123');
// console.log(123 == '123');
//
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
//
//Error
//
// let a = 100;
// let b = 500;
// let c = "hello";
// let d = "okten";
// let x = 'constant value';
// {
//     console.log(a);
//     x = 'new value';
// }
// let y = 'new value';
//
// let result = 100 + y;
//
// console.log(result);
