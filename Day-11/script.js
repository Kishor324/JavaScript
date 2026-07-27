// scope _ it is defined as the fucntin which is  used value retriving throuth the another function


//function-scope: it is yasto jo only axcess able inside a fuction 

// function scpoe() {
//      let a =2 ;
//      console.log(a)    
// }

 // if we try to axcess let a =2 out of fuction which is not possible


 // block-scope  - which is used only inside a {} function
  
 // global- scope =  a function which is used all over a programm which is knoawn global scopr
//   let a =0 ;


// Execution Context is the environment in which JavaScript code is executed.

// It contains everything needed for the code to run, such as:

// Variables
// Functions
// The value of this
// Scope information

// Simple Definition:
// Execution Context is the environment where JavaScript executes your code.



// Lexical (Static) Scope ✅ (JavaScript uses this)
// Dynamic Scope ❌ (JavaScript does not use this)
  

// lexial scope 
// lexical Scope means the scope of a variable is determined by where it is written (declared) in the source code, not by where the function is called.


let name = "Kishor";

function greet() {
    console.log(name);
}

greet();



// dynamic scope

// Dynamic Scope means variables are resolved based on where a function is called, not where it was defined.

// JavaScript does not use dynamic scope.

let name = "Global";

function greet() {
    console.log(name);
}

function test() {
    let name = "Kishor";
    greet();
}

test();


// CLOSURE 
//  YASTO FUNTION jun main fucntion ko output / varible laiparent funtion ko value child function ,a hunxa vane tesl lai nai ho


// clouser counter


 function clicklimiter() {

    let click = 0;
    return function (){

        if ( click <5 ){
            click++;
         console.log(` clciked :${click} times`);}
 else{

     console.log("LIMIT EXCEEDED , TRY AFTER SOMM TALK");
     
    }
    }
    
 }

 let FUN = clicklimiter();
 fnc ();
 fnc ();
 fnc ();
 fnc ();

