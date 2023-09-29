import { Schema, model } from "mongoose";

export const taskSchema = Schema(
  {
    body: { type: String, required: true },
    isCompleted:{type: Boolean},
    createdBy: {type: Schema.Types.ObjectId, required: true},
    completedBy: {type: Schema.Types.ObjectId}
  },
  {
    timestamps: true,
  }
);

export const Task = model("Tasks", taskSchema);
