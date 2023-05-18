const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb+srv://subham:NAPFswODsVaE5FAQ@cluster0.5nmsd5i.mongodb.net/") 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

connectDB();

