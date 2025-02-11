// syntax

// (pi,p2,....)=>return value

// (p1,p2)=>{
    // stmt1
    //stmt2
    //return value
// }

var cube = (num)=>num**3

console.log(cube(3));

var addNumbers=(num1,num2)=>num1+num2

console.log(addNumbers(3,4))

var squares=(n)=>n**2

console.log(squares(4))

// var maxTwo = (n1,n2)=>n1>n2?n1:n2

//console.log(maxTwo(4,3))

var maxTwo=(n1,n2)=>{
    if(n1>n2){
        return n1
    }
    else{
        return n2
    }
}
console.log(maxTwo(3,4))

console.log(sample())

function sample(){
    return "This is a normal function"
}

console.log(arrowfunction())

var arrowfunction=()=>"This is an arrow function"

// hoisting function