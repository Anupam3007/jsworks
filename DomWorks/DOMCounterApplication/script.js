var result=0

function handleIncrement(){

    result++
    document.querySelector("#count").innerHTML=result
}
function handleDecrement(){

    result--
    document.querySelector('#count').innerHTML=result
}
function handleReset(){

    result=0
    document.querySelector("#count").innerHTML=result
}