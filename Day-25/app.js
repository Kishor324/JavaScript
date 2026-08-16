
const express = require('express');
const app = express();
const usermodel = require("./models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const path = require('path');
const connectDB = require('./db/connection');

connectDB();






connectDB(); // connect once when the server starts

app.set ("view engine","ejs")
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extende: true}));
app.use(cookieparser());


// for the connecting the ejs with  the server
app.get('/',(req , res) =>{
res.render('index')
})

 app.post('/create',(req,res)=>{
    let {username ,email , password ,age } = req.body;
    
    bcrypt.genSalt(10,( err , salt ) =>{
        //console.log(salt)
        bcrypt.hash(password,salt , async(err,hash)=>{
            //  console.log(hash)
            let createdUser = await usermodel.create({

                username,
                email,
                password : hash,
                age
            })
           let token =   jwt.sign({email},"shhhhhh")
           res.cookie("token",token);
              res.send(createdUser);
            
        })
    })
});


app.get('/login', function(req,res){
   res.render('login')
})


app.post("/login", async function(req,res){
    let user = await usermodel.findOne({email :user.email});
    if(!user) returnres.send("something is wrong");


    bcrypt.compare(req.body.password ,user.password ,function(err ,result){
        if(result){
        
            let token = jwt.sign({email : user.email},"shhhhhhh")
            res.cookie("token",token);
              res.send("yes yes you can login")

        }
        else res.send("something is wrong")
    })
  
})

app.get("/logout",function(req,res){
    res.cookie("token","")
    res.redirect("/")
})
 





 app.listen(3000)