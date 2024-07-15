class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
//here we have use super keyword to call the constructor of its parent class to access the parent class properties
//here we hae repalce the .call method with super keyword
        super(username)
        this.email=email
        this.password=password
    }
}

const girish = new teacher("girish","girish@fb,com","12345")
console.log(girish);