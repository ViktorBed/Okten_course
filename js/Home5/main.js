//// #1- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let fn = (a, b, c) => (a < c && a < b) ? a:(b<a && b<c)? b:c;
// console.log(fn(8,7,4));

//// #2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let a = 30;
// let b = 60;
// let c = 20;
//
// let fn = () => (a > b && a > c) ? a : (b > a && b > c) ? b : c;
// console.log(fn());
//
//// #3 - створити функцію яка повертає найбільше число з масиву
//
// let a = [10, 50, 30, 20, 80];
//
// let max=(arr)=>{
//     let num = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>num){
//             num = arr[i];
//         }
//     }
//     return num;
// }
// console.log(max(a));
//
//// #4 - створити функцію яка повертає найменьше число з масиву
//
// let a = [10, 50, 30, 20, 80];
//
// let max = (arr) => {
//     let num = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             num = arr[i];
//         }
//     }
//     return num;
// }
// console.log(max(a));
//
//// #5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1, 2, 10]
// let fn = (arr) => {
//     let num=0;
//     for (let i = 0; i < arr.length; i++) {
//         num += arr[i]
//     }
//     return num
// }
// console.log(fn(arr));
//
//// #6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let arr = [2,5,7,90]
// let fn=(arr)=> {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         num += arr[i]
//     }
//     return num/arr.length
// }
// console.log(fn(arr));
//
//// #7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let arr = [1, 5, 8, 2, 9]
// let fn = (arr) => {
//     let max = arr[0]
//     let min = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > min) {
//             min = arr[i]
//         }
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(fn(arr));
//
//// #8 - створити функцію яка заповнює масив рандомними числами
//
// let fn = (arg) => {
//     let arr = [];
//     for (let i = 0; i < arg; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr;
// }
//
// console.log(fn(10));
//
//// #9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let fn = (arg) => {
//     let arr = [];
//     for (let i = 0; i < arg; i++) {
//         arr[i] = Math.round(Math.random() * 10)
//     }
//     return arr;
// }
//
// console.log(fn(10));
//
//// #10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let arr = [1, 2, 3]
//
// let fn = (arr) => {
//     let res = [];
//     let j = 0;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         res[j] = arr[i];
//         j++;
//     }
//     return res;
// }
// console.log(fn(arr));
//
//// #11 - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//!!!!!!!!!!!
// let fn =(x,y)=>  (fn.length ===1)? x :y;
// console.log(fn("One Argument","Two Arguments"));
//
////#12 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let fn = (x, y) => {
//     let res = [];
//     for (let i = 0; i < x.length; i++) {
//         res[i] = x[i] + y[i];
//     }
//     return res;
// }
// console.log(fn([1, 3, 5, 7], [2, 4, 6, 8]));
//
//// #13 - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// let persons = [
//     {name: 'Dima', age: 13, model: 'Camry'},
//     {name: 'Igor', age: 20, model: 'e220'},
//     {name: 'Vasyl', age: 89, model: 'x7'},
// ]
//
// let fn = (arg) => {
//     let res = [];
//     for (let item of arg) {
//         for (const itemKey in item) {
//             res.push(itemKey);
//         }
//     }
//     return res
// }
// console.log(fn(persons));
//
//// #14 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//!!!!!!!!!!!!!
// let arr=[1,3,5,7];
// let arr1 =[2,4,6,8];
// let fn = (arr,arr1) => {
//     let res = [];
//     let i = 0;
//     for (let j = arr.length - 1; j >= 0; j--) {
//         res[i] = arr[j] + arr1[j];
//         i++;
//     }
//     return res;
// }
// console.log(fn(arr,arr1));

//
// let a = 5;
// let b = 7;
//
// let c = a;
// a = b;
// b=c;
//
//
// [b, a] = [a, b]
// console.log(a,b);