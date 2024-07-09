const array="girish"
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}

//for of loop in array
const num=[1,2,3,4,5,6]
for (const key of num) {
    // console.log(key);
}

const name="girish"
for (const printName of name) {
    // console.log(printName);
}


// we can use for fo loop in map also
//map data structure store only the unique valuse and stores in order
const map = new Map();
map.set('IN','India',)
map.set('UK','United Kingdom')
map.set('FR','France')
map.set('IN','India')

for (const [key,value] of map) {
    // console.log(`The key of ${value} is ${key}`);
}

//we can't use for of loop in object so we have to use for in loop in objects
const myObj={
    gk:"girish kumar",
    sk:"sourav singh",
    ns:"nikhil sahu"
}

for (const key in myObj) {
    console.log(`short form of name ${myObj[key]} is ${key}`);
}

// we can use for in loop in arrays also
const arr=["girish","sourav","nikhil"]
for (const key in arr) {
//in this loop we can't do just console.log(key) it will give only the index number
    // console.log(key);
    console.log(arr[key]);
}

//we can't use for in loop in map dataStructure
