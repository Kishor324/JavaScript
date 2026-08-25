const express = require ('express');
const app = express();
const userModel = require("./models/user")
const postModel = require("./models/post")
const connectDB = require('./db/connection');

 connectDB();

app.get("/",function(req ,res){
    res.send("hey");
})
app.get("/create", async function(req ,res){
 let user = await userModel.create({
    username:"kishor",
    age: 25,
    email:"kishorgmail@.com"
})
    res.send(user);
})
    
    app.get("/post/create", async function(req ,res){
     let post = await postModel.create({
        postdata: "sare online basenu kura garla",
        user: "6a8d709a6a15bb0731246459"
     })


        let user = await userModel.findOne({_id:"6a8d709a6a15bb0731246459"});

        user.post.push(post._id);
        await user.save();
        res.send({ post,user})
     })
        
 app.listen(3000);