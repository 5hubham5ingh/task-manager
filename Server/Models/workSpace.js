import { Schema, model } from "mongoose";
import { taskSchema } from "./task.js";

export const workspaceSchema = Schema({
    name:{
        type: String,
        min:2,
        max: 50,
        required: true
    },
    description:{
        type: String,
        max: 500
    },
    owner:{
        type: Schema.Types.ObjectId,
        required: true
    },
    tasks:{
        type: [taskSchema]
    },
    participants:{
        type: [Schema.Types.ObjectId]
    }
});

export const Workspace = model('Workspace',workspaceSchema);