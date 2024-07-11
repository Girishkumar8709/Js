const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task 1`);
        // resolve()//to connect resolve and .then we have to use this method resolve()
        reject()//we can use reject() to connect with .catch()
    },1000)
})
//promise task will never done earlier it will always done after the above tast 
// promiseOne.then(function(){
//     console.log(`Promise comsumed`);
// })

//we use .catch() for reject() function
promiseOne.catch(function(){
    console.log(`promise catch`)
})



//we can write the promise this way also without storing it in a variable
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`promises two `);
        resolve()
    },1000)
}).then(()=>{
    console.log(`promise two comsumed`);
})


//here we have print the date which is present in resolve()
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"girish",email:"girish@gamil.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})



//here we have done promise chain and we have give one condition like
//if there is an error go to reject() and .catch if not then go to resolve() and .then()
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false
        if(!error){
            resolve({username:"sourav",email:"sourav@gamil.com"})
        } else{
            reject(`There is an error`)
        }
    },1000)
})

//promise chain is done over here 
promiseFour.then((user)=>{//if error will false this code will get executed
    console.log(user);
    return user.username//in this line we have retun the user.username in username
}).then((username)=>{//here we have use the above username to print the username
    console.log(username);
}).catch((error)=>{//if error = true this catch will execute
    console.log(error);
}).finally(()=>console.log(`finally done`))//.finally() will always execute as a default



//async await funtion with try and catch block
//this part is same as the aboves
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({name:"nikhil",age:20})
        } else{
            reject(`There is an Error `)
        }
    },1000)
})

//here firstly we have created an async function and one await in await we have put the above task
//and wraped it in a tey catch block this is same as .then() and .catch()
//we use async and wait it always return the promise when we dont want to know that from where the error is coming
//here we just will know that,there is an error that it 
//we will not grt the full info of error that from where it is coming 
async function consumePromiseFive(){
//we have warpped in try catch because if there will be no error then it will go in try else in catch 
    try {
        const response = await promiseFive//as pro iseFive is just a objest not a function that why we have not use ()
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

//we hace call the function
consumePromiseFive()



//async and await

async function getAllUser(){
    try {
        const response = await fetch('https://randomuser.me/api/')//here we have use await because fetching the like will also take time
        const data = await response.json()//here we have use await because to convert in json will also take time
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUser()



//same above code using then and catch

fetch('https://randomuser.me/api/')
.then((response)=>{
    const data = response.json() 
    return data
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})