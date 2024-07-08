function chai() {
    name:"girish"
    console.log();
}
// chai()

//declatation of an arrow function is
const one =() => {
    console.log("hello")
}
one()


//add two number using arrow function (EXPLICIT RETURN)
//it is also know as explicit retun function as because we use {} over here due to which we have to use return.
const sum = (num1,num2) =>{
    return num1+num2
}
console.log(sum(5,7))

//doing same thing but without using return (IMPLICIT RETURN)
//which is also known as implicit retun we write this without {}
const add = (num1,num2) => (num1+num2)
console.log(add(8,9))

//we can use objects also in implicit
//we have to wrapt it inside the () then only it will give the output as an object
const obj = () => ({name:"girish"})
console.log(obj());

//Immeditely Invoked Function Expressions (IIFE)
//its mean the function which immeditely exicute and there is a pollution 
//which occurs and its stop or create delay or some disturb to immeditely exitute teh function
//to handel this we do (IIFE)

//this is the syntax of IIFE we use ()
//here we put the function inside the () and to exicute the function we have use another () at the end.
//to stop the IIFE or  have to use two IIFE in same file use ";" at the end otherwise it will not know where to stop and give error
(function one () {
    console.log("hello");
})();


//we can use IIFE in arrow function also
( () =>{
    console.log("welcome to my course");
})();

//we can pass parameters also inside it we have pass name as a parameter
( (name) =>{
    console.log(`hello my name is ${name}`);
})("girish")