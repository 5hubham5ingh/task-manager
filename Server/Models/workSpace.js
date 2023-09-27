import { Schema, model } from "mongoose";
import { taskSchema } from "./task";

export const workSpaceSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    owner:{
        type: String,
        required: true
    },
    task:{
        type: [taskSchema]
    },
    participants:{
        type: String
    }
});

export const WorkSpace = model('WorkSpace',workSpaceSchema);