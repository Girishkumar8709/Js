const school={
    fullName:"girish kumar",
    id:14,
    gender:"male"
}

// console.log(school.name);

//destructuring in object
//here we have de-structured the fullNmae to name for object name school
const {fullName : name}=school
console.log(name);