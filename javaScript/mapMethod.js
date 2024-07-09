const num = [1,2,3,4,5,6,7,8]

const newNum =  num.map( (no) => no * 10)
// console.log(newNum);

//here we have done chaining in map()  and done filter at the end
const number = num.map( (num) => num * 10).
map( (num)=> num + 1).
filter( (no) =>  no > 50)

console.log(number);