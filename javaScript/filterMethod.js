const  books = [
    { name: "bookone", genre: "science", price: 190, publish: 1960 },
    { name: "booktwo", genre: "fiction", price: 250, publish: 1985 },
    { name: "bookthree", genre: "history", price: 300, publish: 2001 },
    { name: "bookfour", genre: "biography", price: 150, publish: 1999 },
    { name: "bookfive", genre: "fantasy", price: 220, publish: 2010 },
    { name: "booksix", genre: "mystery", price: 180, publish: 1995 },
    { name: "bookseven", genre: "romance", price: 160, publish: 2005 },
    { name: "bookeight", genre: "science fiction", price: 240, publish: 2018 },
    { name: "booknine", genre: "thriller", price: 210, publish: 2012 },
    { name: "bookten", genre: "self-help", price: 130, publish: 2020 }
];

// we have use filter method it just return the true value for that its checks condition
 const newBooks=books.filter( (bk)=>{
    return bk.price >= 200
})
// console.log(newBooks);

//if we want to just retun the name of the books whose price is more than 200
// we have done chaining over here
const nameBook=books.filter( (bk)=>{
    return bk.price >=200
}).map( (bk) => bk.name)

console.log(nameBook);

