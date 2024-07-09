// here we have one previous value and one current value 
//previous value will initialy start we 0 or else if we want any specific number
//to be sarted we can give at the initialnumber at the last

const myNum=[1,2,3]
const newNum=myNum.reduce( function (pre,curr){
    return pre+curr
},0)//we have givien intitalnumber/startNumber to zero which mean also pre=0
//this will give the sum of the number which is in array
console.log(newNum);

//we can do in arrow funtion also we can do other operation also
const sumNum = [1,2,3,4,5,6]

const total = sumNum.reduce( (pre,curr) =>{
    return pre * curr
},2)
console.log(total);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:299
    },
    {
        itemName:"java course",
        price:4999
    },
    {
        itemName:"web dev course",
        price:3999
    }
]
//here curr is the object name so we can access the price by using (.)
const myCart=shoppingCart.reduce( (prev,curr) =>{
    return prev+curr.price
},0)
console.log(myCart);