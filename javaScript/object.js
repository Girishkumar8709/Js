const obj={
    name:"girish",
    "full name":"girish kumar",
    age:20,
    gender:"male",
    email:"girish@google.com",
    isLoggedIn:true,
    daysForLog:["monday","tuesday"]
}

console.log(obj.email)
console.log(obj["email"])

// console.log(obj.full name)
//can access the "full name" using .dot operator
//we have to use [""] this methods
console.log(obj["full name"])



//Q1)  take a Symbol and add it in object's key and print

const sym=Symbol("key")

const obj1={
    name:"raj",
    age:18,
    [sym]:"key1",//we have added the Symbol as a key in object
    gender:"male"
}

console.log(obj1[sym])
console.log(typeof obj1[sym])
console.log(obj1)


//we have use freeze function to lock my object
//that no one can fether change my objects
Object.freeze(obj)
obj.name="sourav"
console.log(obj)


//make object a function
const obj2={
    name:"sourav",
    age:21,
    gender:"male"
}

//making obj2 to a function
obj2.greeting= function(){
    console.log("hello javaScript")
}

//another function
obj2.greetingTwo= function(){
    console.log(`hello javaScript by , ${this.name}`)
}

console.log(obj2.greeting())
console.log(obj2.greetingTwo())