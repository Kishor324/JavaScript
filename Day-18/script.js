//Express.js framework

//Introduction of Express js 

// express js auata npm package ho
// express through we recive and giving a  data and request
// it is alsso a frame work


//Seeting up the basic Express application


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {

//     res.send("hello world");

// });

// app.get('/profile', (req, res) => {

//     res.send("teri ma meri aunry=");

// });

// app.listen(3000);


// what do u means by the middlewaer
// it is all about a barries and a requiest bewteen a route and a server which is also knaown as the testing and like a time out system first my code then another part of code


const express = require('express');
const app = express();

 app.use(( req,re ,next)=>{
    console.log(" tera bhaii champiion hey")
    next();
 })

app.get('/', (req, res) => {

    res.send("hello world");

});

app.get('/profile', (req, res) => {

    res.send("teri ma meri aunry=");

});

app.listen(3000);


// request and response 

//frontend backend frontend like it  send a response to the server and get the data form the server then it shows the display which is known as a reposne and request system in bakcend

