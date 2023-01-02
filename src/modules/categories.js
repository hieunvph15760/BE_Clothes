import mongoose from "mongoose";

const CategoriesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1
    }
},{timestamp: true})

export default mongoose.model("categories",CategoriesSchema);