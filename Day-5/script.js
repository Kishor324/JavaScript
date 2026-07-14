// what is dom and dom manuplication

// The Document Object Model (DOM) is a programming interface created by the browser that represents a web page as a hierarchical tree of objects. DOM manipulation is the process of using a scripting language, primarily JavaScript, to dynamically add, remove, modify, or interact with those web page objects after the page has loaded

//  some operation of dom
 //geteleemnts by id 
//  let h1 = document.getElementById("h1")
//  console.log(h1)
//  console.dir(h1)

// getclaas

//  let h1  = document.getElementsByClassName("h1")
//  console.log(h1)

 // quriesselector

//  let h1 = document.querySelectorAll("h1" )
//   console.log(h1)


//inner text and inner contex 




let h1 = document.querySelector("h1");

h1.innerText = "Hello <b>World</b>";


let h1 = document.querySelector("h1");

console.log(h1.innerText);     // Hello
console.log(h1.textContent);   // Hello World

// innerhtml

 let h1 = document.querySelector("h1");

console.log(h1.innerHTML); // Hello

h1.innerHTML = "Inner <b>HTML</b>";