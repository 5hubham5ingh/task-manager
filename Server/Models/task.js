import { Schema, model } from "mongoose";

export const taskSchema = Schema(
  {
    body: { type: String, required: true },
    isCompleted:{type: Boolean},
    createdBy: {type: String, required: true},
    completedBy: {true: String}
  },
  {
    timestamps: true,
  }
);

export const Task = model("Tasks", taskSchema);
