////#1- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let user1 = new User(10, 'Igor', 'Martinez', 'IM@gmail.com', '3809797979')
// let user2 = new User(9, 'Bogdan', 'Bogdanovich', 'gyhunm@gmail.com', '3809355659')
// let user3 = new User(6, 'Ira', 'Lavanda', 'Lava@gmail.com', '3804636363')
// let user4 = new User(4, 'Katya', 'Penok', 'Pen@gmail.com', '38094567')
// let user5 = new User(7, 'Ahmed', 'Alah', 'Boom@gmail.com', '380932429')
// let user6 = new User(3, 'Roman', 'Midzin', 'OskarMorandi@gmail.com', '380323232')
// let user7 = new User(5, 'Yura', 'Yurinetz', 'Yra@gmail.com', '380236787')
// let user8 = new User(8, 'Vasya', 'Brovinski', 'VB@gmail.com', '38097678579')
// let user9 = new User(2, 'Yana', 'Jeribko', 'YaJeb@gmail.com', '38093232979')
// let user10 = new User(1, 'Egor', 'Petriv', 'EgorPetriv@gmail.com', '38012345678')
// console.log(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
//
////#2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// let UserFilter = users.filter(user => user.id % 2 === 0);
// console.log(UserFilter);
//
////#3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let us = users.sort((a, b) => a.id - b.id);
// console.log(us);
//
////#4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
//
// let clients = [
//     new Client(10, 'Igor', 'Martinez', 'IM@gmail.com', '3809797979', ['pizza', 'cola']),
//     new Client(9, 'Bogdan', 'Bogdanovich', 'gyhunm@gmail.com', '3809355659', ['sushi', 'wood', 'roll', 'wasabi']),
//     new Client(6, 'Ira', 'Lavanda', 'Lava@gmail.com', '3804636363', ['tea', 'sugar']),
//     new Client(4, 'Katya', 'Penok', 'Pen@gmail.com', '38094567', ['coffee']),
//     new Client(7, 'Ahmed', 'Alah', 'Boom@gmail.com', '380932429', ['apples', 'pineapples']),
//     new Client(3, 'Roman', 'Midzin', 'OskarMorandi@gmail.com', '380323232', ['meat', 'potato', 'tomato', 'fork']),
//     new Client(5, 'Yura', 'Yurinetz', 'Yra@gmail.com', '380236787', ['hot-dog', 'napkins']),
//     new Client(8, 'Vasya', 'Brovinski', 'VB@gmail.com', '38097678579', ['WOK']),
//     new Client(2, 'Yana', 'Jeribko', 'YaJeb@gmail.com', '38093232979', ['burrito']),
//     new Client(1, 'Egor', 'Petriv', 'EgorPetriv@gmail.com', '38012345678', ['sandwich', 'souse', 'pickles']),
// ]
// console.log(clients);
//
////#5- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let filteredClients = clients.sort((a, b) => a.order.length-b.order.length)
// console.log(filteredClients);
//
////#5- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, country, year, speed, motor) {
//         this.model = model;
//         this.country = country;
//         this.year = year;
//         this.speed = speed;
//         this.motor = motor;
//         this.driver = function (driver) {
//             this.driver = driver
//         }
//     }
// }
//
// let car = new Car('Mazda', 'Japan', '2006', '220', '1,6');
// let drive = (`їдемо зі швидкістю ${car.speed} на годину`)
// console.log(drive);
// let info = (car)
// console.log(info);
// let increaseMaxSpeed = [car.speed] = ['240'];
// console.log(increaseMaxSpeed);
// let changeYear = [car.year] = ['2007'];
// console.log(changeYear);
// driver = 'me';
// console.log(driver);
//
////#6- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, country, year, speed, motor) {
//         this.model = model;
//         this.country = country;
//         this.year = year;
//         this.speed = speed;
//         this.motor = motor;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//     info(){
//         console.log(`назва поля ${this.model}- значення поля`);
//     }
//     increaseMaxSpeed(newSpeed){
//         newSpeed = 290;
//         console.log(newSpeed);
//     }
//     changeYear(newValue){
//         this.year = newValue
//         return this.year;
//     }
//     addDriver(driver){
//         console.log(driver("водій"));
//     }
// }
//
// let car = new Car('Mazda', 'Japan', '2006', '220', '1,6');
//
////#7-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class popelushka {
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }
//
// let popeshlushka = [
//     new popelushka('Lesya', '29', '30'),
//     new popelushka('Olha', '211', '69'),
//     new popelushka('Ira', '21', '40'),
//     new popelushka('Katya', '44', '37'),
//     new popelushka('Lara', '33', '33'),
//     new popelushka('Ivangelina', '12', '35'),
//     new popelushka('Women', '43', '36'),
//     new popelushka('Bogdana', '32', '43'),
//     new popelushka('Yana', '19', '42'),
//     new popelushka('Anna', '18', '39'),
// ]
//
// class Prince {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let princess =popeshlushka.find(shoe =>shoe.foot ===prince.size);
// console.log(princess);