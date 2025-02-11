var text="the quick brown fox jumps over a lazy dog"
var alphabets="abcdefghijklmnopqrstuvwxyz"

var isPangram=true

for(let ch of alphabets){

    if(!text.includes(ch)){

        isPangram=false
        break

    }
}

console.log(isPangram);


