import bodyParser from "body-parser"
import { createError } from "../error.js"
import User from "../models/User.js"

// Update User account
export const updateUser = async(req,res,next)=>{
    if (req.params.id===req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new:true}
            )
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403,"You can update only your account!"))
    }
}

// delete User account
export const deleteUser = async (req,res,next)=>{
    if (req.params.id===req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id,{
                $set:req.body
            },
           // {new:true}
            )
            res.status(200).json("User has been deleted succesfully!")
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403,"You can delete only your account!"))
    }
}

// Rechercher User account

export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

// Subscribe on the channel
export const subscribe = async (req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1},
        });
        res.status(200).json("Subscription successfull.")
    } catch (err) {
        next(err)
    }
}

    // unsubscribe on the channel
export const unsubscribe = async (req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1},
        });
        res.status(200).json("Unsubscription successfull.")
    } catch (err) {
        next(err)
    }
}
export const like = async(req,res,next)=>{
    try {
        
    } catch (err) {
        next(err)
    }
}
export const dislike = async(req,res,next)=>{
    try {
        
    } catch (err) {
        next(err)
    }
}