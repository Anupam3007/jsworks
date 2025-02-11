// decision making

/*
if(condition){
    // true expression
}
else{
    // false expression
    }
*/

/*
if(condition1){
    statement1
}
else if(condition2){
    statement2
}
elseif(condition3){
    statement3
}
else{
    default
}
*/

var number=10

// -ve +ve zero

if(number>0){

    console.log("+ve")

}

else if(number<0){

    console.log("-ve")

}

else if(number==0){

    console.log("zero")
}

var num1=15

// display PING if number / 3
// display PONG if number / by 5
// display PINGPONG if number / 15

if(num1%15==0){

    console.log("PINGPONG")

}
else if(num1%5==0){

    console.log("PONG")

}
else if(num%3==0){

    console.log("PING")

}