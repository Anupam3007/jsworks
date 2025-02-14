function handleGoButtonClick(){

    let begin=+document.querySelector("#start").value
    let end=+document.querySelector("#stop").value
    
    let htmlData=""
    for(let i=begin;i<=end;i++){
        htmlData+=`<p>${i}</p>`
    }
    document.querySelector("#root").innerHTML=htmlData


       


}