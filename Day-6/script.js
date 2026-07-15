//what is event and event lisneran 
// 
// event is a signal fired by the browser when a specific action or occurrence happens on a web page, while event handling is the process of writing code (a function) to detect and respond to that signal

// an event listener is a specific function in JavaScript that "watches" a target DOM element for a precise action (like a click) and runs a block of code the exact moment that action occurs.While the terms

// let p = document.querySelector("p");
 
//  p.addEventListener( "click" ,function(){
//    p.style.color = " red";
//  })


//input
 let input = document.querySelector("input");
  input.addEventListener("input", function(data){
//      console.log("typed")
if (data.data !==null){
    console.log(data.data)
}
//     //  console.log(data.target.value)
 })
 
// change 
 let div = document.querySelector("select")
  let device = document.querySelector("#device")
  
  div.addEventListener("change", function(data) {
 

     device.textContent = `${data.target.value}device selected`
    //  console.log( data.target.value)
  })