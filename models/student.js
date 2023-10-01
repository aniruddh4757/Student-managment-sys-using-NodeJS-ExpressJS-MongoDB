import mongoose from "mongoose";

const stuSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:10, max:70},
    fees:{type:mongoose.Decimal128, required:true, validate:(v)=>{v>=5500.50}}
})


const StudentModel = mongoose.model('student', stuSchema)             //creating model


export default StudentModel