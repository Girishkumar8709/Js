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