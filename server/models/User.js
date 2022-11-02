import { timeStamp } from "console";
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    ing:{
        type:String,
    },
    subscribers:{
        type:Number,
        default:0,
    },
    subscribedUsers:{
        type:[String],
    },
},
{timestamp:true}
);

export default mongoose.model("User",UserSchema);