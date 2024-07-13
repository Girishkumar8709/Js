function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(6));
console.log(multipleBy5.power);
//it will return an empty object that mean just like array,string in js are also a object same function is also an object
console.log(multipleBy5.prototype);