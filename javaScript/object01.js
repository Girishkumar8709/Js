//declaring a singleton object
const employee = new Object()
console.log(employee)


//declaring a  non singleton object
const employee01={}
console.log(employee01)
//both output will be same 

const student={

}
student.name="girish"
student.class=9
student.section="A"
student.roll_no=12

console.log(student)

//print the keys of student
console.log(Object.keys(student));

//print all the values of student 
console.log(Object.values(student));

//print all key value in the form of seprate arrays  in array
console.log(Object.entries(student)) 
//it will give this output
// [
//     [ 'name', 'girish' ],
//     [ 'class', 9 ],
//     [ 'section', 'A' ],
//     [ 'roll_no', 12 ]
//   ]

//nested object is also possible here
const school={
    email:"school@gmail.com",
    fullName:{
        userFullName:{
            firstName:"girish",
            lastName:"kumar"
        }
    }
}

// console.log(school)
// console.log(school.fullName)
// console.log(school.fullName.userFullName)
// console.log(school.fullName.userFullName.firstName)


//adding the object or mearging the objects
const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"a",
    5:"b",
    6:"c"
}
const obj3={
    7:"a",
    8:"b",
    9:"c"
}

//using Object.assign method
//it use target and source method
//here obj1 is target or the objects where other objects or source  will store

// const result=Object.assign(obj1,obj2,obj3)
//here  empty object{} is target and rest others are source like(source1=obj1,source2=obj2,etc)
const result=Object.assign({},obj1,obj2,obj3)

// console.log(result);

//both will give same output
//using spread operator
const result1={...obj1,...obj2,...obj3}
// console.log(result1);

const college=[
    {
        name:"AU",
        id:"123@31"
    },
    {
        name:"MU",
        id:"143@31"
    },
    {
        name:"DU",
        id:"123@51"
    },
]

