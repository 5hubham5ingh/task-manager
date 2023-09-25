import { Schema, model } from "mongoose";
import { taskSchema } from "./task.js";
import { workSpaceSchema } from "./workSpace.js";

const userSchema = Schema({
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    workSpaces:[workSpaceSchema]
},{
    timestamps: true
})

export const User = model('users',userSchema)