var arr=[10,20,30,40]

var k=2

// rotate array k times

for(let i=1;i<=k;i++){

    let poppedItem=arr.pop()

    arr.unshift(poppedItem)
}

console.log(arr);
