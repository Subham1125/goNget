const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("./db/gngdb")
const bcrypt = require("bcrypt")
const Register =require("./model/register")
const port = process.env.PORT || 3000;
const validator = require('validator')

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})


// app.post("/register", async(req, res)=>{
//     try{
//         console.log(req.body.name)
//     }
//     catch(error){
//         console.log(error)
//         process.exit()
//     }
// })



app.post("/register", async(req, res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;

        if (password === cpassword){
                   const registerclient = new Register ({
                    name:req.body.name,

                    email:req.body.email,
                 
                    password: password,

                   })
                   const registered = await registerclient.save();
                   res.redirect("index.html")
        }else{
            res.send("incorret information given")

        }
    }
    catch(error){
        console.log(error)
        
    }
})

app.post("/login", async(req, res)=>{
    try{
        const email = req.body.email;
        const password= req.body.password;

        const useremail = await Register.findOne({email:email});
        const match = await Register.findOne({password});

        if (match==password){
            res.send("sucessfully logged in");
        }
        else{
            res.send("invalid login information");
        }
    }
    catch(error){
        console.log(error)
    }
})

app.listen(port , ()=>{  
    console.log("3000")
})