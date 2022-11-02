import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../error.js"
import jwt from "jsonwebtoken";

// signup controller

export const signup = async (req,res,next)=>{
    console.log(req.body)
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({...req.body,password:hash})
        await newUser.save();
        res.status(200).send("User has been created!")
    } catch (err) {
        next(createError(404,"not found sorry!"))
    }
}

// Sign in Controller
export const signin = async (req,res,next)=>{
    console.log(req.body)
    try {
       const user = await User.findOne({name:req.body.name,})
       if (!user) return next(createError(404,"User not found!"))

       // compare le password soumit

       const isCorrect = await bcrypt.compare(req.body.password,user.password)

       if(!isCorrect) return next(createError(400,"Wrong credentials!"))

        const token = jwt.sign({id:user._id},process.env.JWT)
        const {password,...others} = user._doc;

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others);


    } catch (err) {
        next(createError(404,"not found sorry!"))
    }
}

export const google = ()=>{

}