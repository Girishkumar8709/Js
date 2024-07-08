 function addTwoNumbers(number1,number2){
    console.log(number1+number2)
 }
//  addTwoNumbers(5,7)

 function userName(username){
    if(username === undefined){
        console.log("please enter the user name")
        return
    }
    return `${username} is loggedIn`
 }

 console.log(userName("Girish"))


 //rest operator (...) as we have pass only one parameters muntilpe arguments can be pass
 //and it group all the arguments and give in a single array
 function claculatePrice(...num){
   return num
 }
//here we have pass 3 arguments
 console.log(claculatePrice(30,56,75))//it will give i single array



 //here we have pass an object in a function
 function details(anyObjects){
   console.log(`hello my name is ${anyObjects.name} and I am ${anyObjects.age} year old.`)
 }

 //here we have call a function and inside the function calling we have pass an argument as a object.
 details({
   name:"girish kuamr",
   age:20
 })


 //same we have pass and array inside the function
 //creat an array
 const newArray=[20,45,67,34]

 function returnArrat(ansArray){
   console.log(ansArray[2])
 }

 //pass the above array as an argument in the function

returnArrat(newArray)

//we can do like this also without declating the array at first we can declare like this also
returnArrat([20,45,62,89])