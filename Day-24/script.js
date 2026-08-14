//authentication and authorization


const cokkieParser = require('cookie-parser');
const express = require('express')
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


 app.use(cokkieParser())
 
// jwt section
 app.get ("/",(req,res) =>{
    let token = jwt.sign({email: "kishor@23gamial.com"}, "secret")
        res.cookie("token",token);
        res.send("done")

})

app.get ("/read",(req , res) =>{
    let data = jwt.verify(req.cookies.token,"secret")
console.log(data);        
})


//bcrypt section

//  app.get("/",( req, res) =>{

// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("xujwehffwj", salt, function(err, hash) {
//         // Store hash in your password DB.
//         //console.log(salt)
//         console.log(hash)
//     });
// });

// // Load hash from your password DB.
// bcrypt.compare("xujwehffwj", "$2b$10$ybsTcbCxd5OY.IZv69MzdObKy9/YPIEZ8d95.xundwrIB0Zj9P072", function(err, result) {
//     // result == true
//     console.log(result)
// });
//  })


//cookies section
// app.get("/",( req, res) =>{

//     res.cookie("cookei","this is a cookie")  // this  is how we set  the cookies
//     res.send("comeback hoga kay")

// })
// app.get("/read",( req, res) =>{
//      console.log("hey")
//     console.log(req.cookies); // this is how we read cookeis form anywhere
//     res.send("read the page")
// })

app.listen(3000); // this is the port where we can check our routes in browser
