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
    if(user.name){
        console.log(user);
    }
}


//addishinal

let x = 0;
if (x === 0) {
    console.log(true);
}
else{
    console.log(false)
}
i
