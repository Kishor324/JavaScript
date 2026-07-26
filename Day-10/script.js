// // localstorage

// stroage data permanently in the browser


// localStorage.setItem("theme", "dark");

// let theme = localStorage.getItem("theme");

// localStorage.removeItem("theme");

// localStorage.clear();

// console.log(localStorage.length);

// console.log(localStorage.key(0));

//  for the store Object

//  const user = {
//     name: "Kishor",
//     age: 20
// };

// localStorage.setItem("user", JSON.stringify(user));


//  for the retrieve data

//  const user = JSON.parse(localStorage.getItem("user"));

// console.log(user.name);




//SESSION STORAGE

  //stores data only while browser tab remains open
// sessionStorage.setItem("name","Kishor");

let name = sessionStorage.getItem("name");

sessionStorage.removeItem("name");

sessionStorage.clear();

console.log(sessionStorage.length);

console.log(sessionStorage.key(0));~

// store objecy

const student = {
    name: "Ram",
    age: 21
};

sessionStorage.setItem(
    "student",
    JSON.stringify(student)
);

//  retrieve object

 const student = JSON.parse(
    sessionStorage.getItem("student")
);

console.log(student);




// Cookies

// Cookies store small amounts of data in the browser and can be sent to the server with each HTTP request.

// Create Cookie
// document.cookie = "username=Kishor";