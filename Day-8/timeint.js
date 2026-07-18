//settimeout

// setTimeout( function() {
//     console.log("hello")
// }, 1000);
 
// //setinterval
// setInterval( function() {
//     console.log("hello")
// }, 5000);


 //cleartimeout

//  let tm = setTimeout( function() {
//     console.log("hello")
// }, 3000);

// clearTimeout(tm);


// // clearinterval
//  let tm = setTimeout( function() {
//     console.log("hello")
// }, 3000);

// clearInterval(tm);

// qn 
// let count = 10;
//   let intervl = setInterval (function() {
//    if(count >=1){

//        count--;
//        console.log(count)
//     }
//     else clearInterval(intervl)
//     }, 1000);

let count = 0;
let seconds = 5;

let progress = document.querySelector("#progress");
let precentText = document.querySelector("#precentText");

let intv = setInterval(function () {

    if (count <= 100) {

        progress.style.width = `${count}%`;
        precentText.textContent = `${count}%`;

        count++;

    } else {

        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(intv);

    }

}, (seconds * 1000) / 100);