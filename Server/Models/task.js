import { Schema, model } from "mongoose";

export const taskSchema = Schema(
  {
    body: { type: String, required: true, max: 1000 },
    isCompleted: { type: Boolean },
    createdBy: {
      id: { type: Schema.Types.ObjectId, required: true },
      name: { type: String, required: true },
    },
    completedBy: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Task = model("Task", taskSchema);
