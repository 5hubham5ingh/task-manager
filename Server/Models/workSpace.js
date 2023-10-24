import { Schema, model } from "mongoose";
import { taskSchema } from "./task.js";

export const workspaceSchema = Schema({
  name: {
    type: String,
    min: 2,
    max: 50,
    required: true,
  },
  description: {
    type: String,
    max: 500,
  },
  owner: {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  tasks: {
    type: [taskSchema],
  },
  participants: [
    {
      _id: {
        type: Schema.Types.ObjectId,
      },
      userName: { type: String },
    },
  ],
});

export const Workspace = model("Workspace", workspaceSchema);
