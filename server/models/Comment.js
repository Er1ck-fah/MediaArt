import { timeStamp } from "console";
import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    videoId:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
},{timeStamp:true})


export default mongoose.model("Comment",CommentSchema);