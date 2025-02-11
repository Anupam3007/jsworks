// function functionName(parameter1,parameter2,.....,.....){
        // function definition        
        //return value
// }

function add(num1,num2){

    return num1+num2

}

var addResult=add(400,100)

console.log(addResult)

function cube(n){

    return n**3

}

console.log(cube(3))

// create a function maxTwo with two parameters num1,num2 return maximun Number

function maxTwo(num1,num2){

    return num1>num2?num1:num2
}

console.log(maxTwo(4,3))

//create a function lastDigitMax(num1,num2) lastDigitMax(870,127)

function lastDigitMax(num1,num2){

    return num1%10>num2%10?num1:num2

}
console.log(lastDigitMax(870,127))

//create a function factorial(num) return factorial of that number

function factorial(num){

    let fact=1

    for (let i=1;i<=num;i++){

        fact = fact*i

    }

    return fact

}
return console.log(factorial(5))