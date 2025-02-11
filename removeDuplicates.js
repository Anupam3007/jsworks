var arr=[10,20,10,30,40,40]

var newArr=[]


for(let num of arr){

    if(!newArr.includes(num)){
        newArr.push(num)
    }
}

console.log(newArr)

var arr=[1,2,3,5,6]
//       0 1 2 3 4
//       l r        

// missing least +ve integer

for (let left=0;left<arr.length-2;left++){

    let right=left+1

    let result=arr[right]-arr[left]
    
    if(result!=1){

        console.log(arr[left]+1,"is missing")

        break
    }
}

