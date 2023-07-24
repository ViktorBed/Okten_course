////- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
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
//// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
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
//// - створити функцію яка повертає найбільше число з масиву
//
let arr = [4, 125, 53, 7, 23, 5, 31, 1,]

function lowNumber(arg1) {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i]
        return arr[i];
    }
}

console.log(lowNumber(arr));