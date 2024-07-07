console.log("girish")
const marvelHero = ["ironMan","spiderman","thor"]

const dchero=["batman","superman","joker"]

const newhero1=marvelHero.concat(dchero)
//merge two array using concat() here we can merge only two arrays only
console.log(newhero1);


const newhero2=[...marvelHero,...dchero]
//merging the arrays using spread operator (...) here we can merge with n number of arrays
 console.log(newhero2);

const test=[1,2,3,[2,4,5],6,[7,8,[3,5],7],0]
//it will give the complex array to a single array
console.log(test.flat(Infinity))
//here Infinity mean dept which you want to conver in single array



 const arr="girish"
 console.log(Array.isArray(arr))//it will print false cause it is not an array

 //to conver in array
 console.log(Array.from(arr))
 

 const obj={
    name:"girish",
    age:21,
    gender:"male"
 }
 //it will give an empty array [] cause we have not give the condetion 
 //in what key or values we want in array as objects is collection of key values pair
 console.log(Array.from(obj))


 const score1=100
 const score2=200
 const score3=300
//it will return new array from the given set of an array
 console.log(Array.of(score1,score2,score3))