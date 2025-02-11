/*

for(initialization;condition;increment/decrement){

        loop body
}
*/

// 1 to 100

for(let i=1;i<=100;i++){

    console.log(i);

}

//display multiplication table of 9

var num1=9

for(let i=1;i<=10;i++){
    console.log(`${i} * ${num1} = ${num1*i}`);
}

// largestOddNumber

var num2=1234

while(num2!=0){

    let lastDigit=num2%10

    console.log(lastDigit)

    //Math.floor(123.4=123)

    num2 = Math.floor(num2/10)
}

var num3=16178

while(num3!=0){

    let lastDigit=num3%10

    if(lastDigit%2!=0){

        console.log(num3)

        break

    }

    else{

        num3=Math.floor(num3/10)

    }
    
}