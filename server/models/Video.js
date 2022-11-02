import { timeStamp } from "console";
import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    imgUrl:{
        type:String,
        require:true,
    },
    views:{
        type:Number,
        default:0,
    },
    tags:{
        type:[String],
        default:[]
    },
    likes:{
        type:[String],
        default:[]
    },
    dislikes:{
        type:[String],
        default:[]
    },
   
},{timeStamp:true})


export default mongoose.model("Video",VideoSchema);