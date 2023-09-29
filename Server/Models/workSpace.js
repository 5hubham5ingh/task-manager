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
        type: Schema.Types.ObjectId,
        required: true
    },
    task:{
        type: [taskSchema]
    },
    participants:{
        type: [Schema.Types.ObjectId]
    }
});

export const WorkSpace = model('WorkSpace',workSpaceSchema);