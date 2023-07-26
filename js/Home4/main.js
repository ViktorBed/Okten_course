//// #1- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let x = 50
// let y = 90
// let z = 10
//
// function getLower(arg1, arg2, arg3) {
//     if (arg1 < arg2 && arg1 < arg3) {
//         return arg1
//     } else if (arg2 < arg1 && arg2 < arg3) {
//         return arg2
//     } else return arg3
// }
//
//console.log(getLower(x, y, z));
//
//// #2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let x = prompt()
// let y = prompt()
// let z = prompt()
//
// function getLower(arg1, arg2, arg3) {
//     if (arg1 > arg2 && arg1 > arg3) {
//         return arg1
//     } else if (arg2 > arg1 && arg2 > arg3) {
//         return arg2
//     } else return arg3
// }
//
// console.log(getLower(x, y, z));
//
//// #3 - створити функцію яка повертає найбільше число з масиву
//
// let arr = [4, 15, 53, 7, 23, 5, 31, 1];
//
// function highNumber(arr) {
//     let maxNumber = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }
//
// console.log(highNumber(arr));
//
//// #4 - створити функцію яка повертає найменьше число з масиву
//
// let arr = [4, 15, 53, 7, 23, 5, 31, 5];
//
// function highNumber(arr) {
//     let maxNumber = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }
//
// console.log(highNumber(arr));
//
//// #5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let res = [1,2,10];
//
// function num(arr){
//     let res=0;
//     for (let i = 0; i < arr.length; i++) {
//         res +=arr[i];
//
//     }
//     return res;
// }
// console.log(num(res));
//
//// #6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let res = [15,5,10];
//
// function num(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res = res + arr[i]
//     }
//     return res/ arr.length;
// }
// console.log(num(res));
//
//// #7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let arr = [4, 15, 53, 7, 23, 5, 31, 5];
//
// function highNumber(arr) {
//     let maxNumber = arr[0];
//     let minNumber = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }if (arr[i] < minNumber) {
//             minNumber = arr[i];
//         }
//     }
//     console.log(maxNumber);
//     return minNumber;
// }
//
// console.log(highNumber(arr));

//// #8 - створити функцію яка заповнює масив рандомними числами
//
// function random(arrLength) {
//     let arr = [];
//     for (let i = 0; i < arrLength; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr;
// }
//
// console.log(random(10));
//
//
//// #9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(arrLeng) {
//     let arr =[]
//     for (let i = 0; i < arrLeng; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr;
// }
//
// console.log(random(3));
//
//// #10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let arr = [1, 2, 3];
//
// function arrGet(arr) {
//     let res = [];
//     for (let j = arr.length -1 ; j >= 0; j--) {
//     res.push(arr[j])
//     }
//     return res;
// }
// console.log(arrGet(arr));

//// #11 - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function getArguments(arg1, arg2) {
//     if (arg1 === 0 && arg2 !== 0) {
//         console.log(arg1);
//     } else if (arg1 !== 0 && arg2 === 0) {
//         console.log(arg2);
//     } else console.log(arg1 + arg2);
//     return 0;
// }
//
// console.log(getArguments(2, 3));
//
////++++++++ #12 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
// let x =[70,80,1,73,12]
// let y =[40,90,45,6,8]
//
// function num(arr1,arr2){
//     let res =[];
//     for(let i = 0; i< arr1.length;i++){
//         res[i] = arr1[i]+ arr2[i];
//     }
//     return res;
// }
// console.log(num(x,y));

//// #13 - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// let persons = [
//     {name: 'Dima', age: 13, model: 'Camry'},
//     {name: 'Igor', age: 20, model: 'e220'},
//     {name: 'Vasyl', age: 89, model: 'x7'},
// ]
// function getMass(arg1,arg2,arg3){
//     let res1 = []
//     for (let i = 0; i < arg1.length; i++) {
//         let arg1Element = arg1[i];
//         res1[i] =arg1[i]
//     }
//     return res1;
// }
// console.log(getMass(persons));
//
//// #14 - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// Обернутий !!! [9,7,5,3]
//як 12 завдання + no.reverse();
//
// let x =[1,2,3,4]
// let y =[2,3,4,5]
//
// function num(arr1,arr2){
//     let res =[];
//     for(let i = arr1.length -1; i>= 0;i--){
//         res.push(arr1[i]+arr2[i]);
//     }
//     return res;
// }
// console.log(num(x,y));
//
//
