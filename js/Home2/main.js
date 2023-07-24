//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 3;
// if (x !== 0){
//     console.log(true);
// }
// else console.log(false);
//
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time =prompt();
// if (time > 0 && time <= 15){
//     console.log('First Decade');
// }else if ( time>15 && time<=30){
//     console.log('Second Decade');
// }else if ( time>30 && time<=45) {
//     console.log('Third Decade');
// }else if ( time>45 && time<=60) {
//     console.log('Forth Decade');
// }
//
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
//
// let day = prompt('Type a day');
// if (day > 0 && day < 11) {
//     console.log('First Decade');
// } else if (day > 11 && day < 21) {
//     console.log('Second Decade');
// }else if (day>21 && day<=31){
//     console.log('Third Decade');
// }
//
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let expr = prompt('WeekPlans')
//
// switch (expr) {
//     case 'Monday':
//         console.log('Monday Plans');
//         break;
//     case 'Tuesday':
//         console.log('Tuesday Plans');
//         break;
//     case 'Wednesday':
//         console.log('Wednesday Plans');
//         break;
//     case 'Thursday':
//         console.log('Thursday Plans');
//         break;
//     case 'Friday':
//         console.log('Friday Plans');
//         break;
//     case 'Saturday':
//         console.log('Saturday Plans');
//         break;
//     case 'Sunday':
//         console.log('Sunday Plans');
//         break;
// }
//
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
//  let random1 = Math.round(Math.random()* 100);
//  let random2 = Math.round(Math.random()* 100);
//  if (random1>random2){
//      console.log(random1);
// }else if (random1<random2){
//      console.log(random2);
//  }else if (random1===random2)
//      console.log('Rovno');
