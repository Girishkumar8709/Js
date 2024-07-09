/******************************************forEach ******************************* */
//forEach method

const coding=["js","py","cpp","java"]

// function print (value){
//     console.log(value);
// }

// coding.forEach(print)

//we can do withiout making the function also
//we have declared the function in side the forEach method
coding.forEach( function (value) {
    console.log(value);
})

//we can do arrow function also over here 

coding.forEach( (value)=>{
    console.log(value);
})

//we can make objects in side the array and take the access of that object with using forEach method
const student=[
    {
        name:"girish",
        age:20
    },
    {
        name:"sourav",
        age:22
    },
    {
        name:"nikhil",
        age:20
    }
]

//here the name of the objects are value and by using (.) we have taken the access
student.forEach( (value) => {
    console.log(value.name);
})

