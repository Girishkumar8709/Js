//we have discuss the construction function which is new keyword and this keyword
const user = {
    username:"girish",
    age:21,
    isLogged: true,

    getUserDetails : function(){
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


//here we have created one Function object 
function User(username,isLoggedIn,logiCount){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.logiCount = logiCount
   
    // return this 
}

// here we have created two instance without useing new key word so that why it will over write the data 
//Userone data will get overwritted with UserTwo 
const userOne = User("girish",true,5)
const userTwo = User("sourav",false,4)

console.log(userOne);
console.log(userTwo);

//like we use new key word i help to create multiple instance and data will not get overwrited
const one = new User("nikhil",true,7)
const two = new User("abhishek",false,3)

console.log(one);
console.log(two);