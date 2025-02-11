var words=["hello","hai","hello","hai","hai"]

//word count
var wordCount={}

for(let w of words){

    w in wordCount?wordCount[w]+=1:wordCount[w]=1
    // if(w in wordCount){
    //     wordCount[w]+=1
    // }
    // else{
    //     wordCount[w]=1
    // }
}
console.log(wordCount);

// ABCCDAA
// first recursive character

var text="ABCCDAA"

var wc={}

for(let ch of text){
    if(ch in wc){
        console.log(`First recursive character is ${ch}`)
        break
    }
    else{
        wc[ch]=1
    }
}

var sourceWord="CHICKEN"

var targetWord="HEN"

var wordCount={}

for(let ch of sourceWord){

    ch in wordCount?wordCount[ch]+=1:wordCount[ch]=1
}
var isKWD=true

for(let ch of targetWord){
    if(ch in wordCount && wordCount[ch]>0){
        wordCount[ch]-=1
    }
    else{
        isKWD=false
        break
    }
}
console.log(isKWD)