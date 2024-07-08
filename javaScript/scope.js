//the data whic we have declared out side or globally is known as global scope
let a =200
var c = 40


//inside {} all the data are in the block scope and {} it is known as a block scope.
//you cannot  access any thing from outside which is inside the blockScope
//but can access globalScope variables inside the blockScope
if(true){
    let a=5
    const b=78
    var c=32
    var c=56
    console.log("inside value:",a);
}
console.log(a);
// console.log(b);
console.log(c);


//**********************nested function****************************************** */
//similarly we can create the nested function

function one(){
    const username="girish"
    function two(){
        const age = 20
//we can access the partents's variable inside the child
        console.log(username)
    }
//we can access the child's variable out side it 
    // console.log(age)
    two()
}
one()

//similarly nested if

if(true){
    const website="youtube"

    if(true){
        const price=199
//we can access the parent's variable inside its child socpe
        console.log(`website name is ${website} and its price is ${price}`)
    }
//same we can't access the child's variables outside it
    // console.log(price)
}
//we can't access the it outsode its scope
// console.log(website)