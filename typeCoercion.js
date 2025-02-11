//type coercion in js

var num1='10'

var num2=20

console.log(num1+num2)  // output 1020 here num2 of type number automatically converted to type string

var num3 = '100'

var num4 = 100

console.log(num3 == num4)  // o/p ? true == content compare

//strict match content + type ===

console.log(num3 === num4) //false

