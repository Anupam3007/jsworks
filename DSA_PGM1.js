var  arr = [10,100,20,200,30,300,40,400,50]
//           0  1   2  3  4   5   6  7   8


// procedure odd reverse swap
var left = 1

var array_length = arr.length-1

var right = array_length%2==0?array_length-1:array_length

while(left<right){

    let temp=arr[left]

    arr[left]=arr[right]

    arr[right]=temp

    left+=2

    right-=2

}

console.log(arr)


