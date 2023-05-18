const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const validator = require('validator')

const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:5
    
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error("chutiya h kiya lawde")
                 res.send("chutiya h kiya lawde gmail sahi deh, FUCK YOU!!!")
            }
        }
        
    },
    password:{
        type:String,
        require:true,
        
       
    },
    confirmPassword:{
        type:String,
        require:false,
        
    },
    })
clientSchema.pre("save", async function(next){
    if(this.isModified("password")){
       const pass= this.password = await bcrypt.hash(this.password, 10)
       console.log(pass);
    }
    next();
})


    const Register =  new mongoose.model("Register",clientSchema );

module.exports= Register;