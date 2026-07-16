// // suru ma h1 lai  variabale banau ney ani tesma hami tesko key value ma lai window ma print garxau


let h1 = document.querySelector("h1")

 window.addEventListener("keydown", function(data){
     if(data.key === " "){
         h1.textContent = " kuch to hey bhai "; 
        //console.log(" maka bhosada aag")
     }
     
    else{
        h1.textContent = data.key;
    }
 })

// chose file form the file manager


let btn = document.querySelector("#btn")
let filesin = document.querySelector("#filesin")

 btn.addEventListener("click",function(){
    filesin.click()
 })
 
 filesin.addEventListener("change",function(data){
 const file = data.target.files[0];
 if(file){
    btn.textContent = file.name;
 }
 }
 )

