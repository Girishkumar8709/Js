function setUserName(username){
    this.username=username
}


//here we have use .call to hold the refrence
//whenever we use call we have to pass this as a first parameter that why we have use this over here  
//if we don't use this then it will but no change in the object 
function createUser(username,email,password){
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createUser("girish","girish@gmail.com",123)
console.log(chai);