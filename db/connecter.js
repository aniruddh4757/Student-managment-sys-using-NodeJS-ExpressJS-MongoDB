import mongoose from 'mongoose'


const connectdb = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/college").then(
    console.log("connected successfully..!")                              
    )
}

export default connectdb