class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abcd`
    }
    changeName(){
        return `${this.username.toUpperCase()}`
    }
}

const girish = new user("girish","girish@fb.com","1234")
console.log(girish);
console.log(girish.encryptPassword())
console.log(girish.changeName());


// same thing without using class 

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`   
}
User.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const sourav = new User("sourav","sourav@fb.com","33456")

console.log(sourav.changeName());
console.log(sourav.encryptPassword());