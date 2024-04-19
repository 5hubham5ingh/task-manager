import { Workspace } from "../Models/workspace.js";
import catchAsync from "../utils/catchAsync.js";

export const sendTaskList = catchAsync(async (request, response) => {
  console.log("send task List.");
  try {
    const { workspaceId } = request.params;

    const workspace = await Workspace.findById(workspaceId).lean();

    if (!workspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    } else {
      response.status(200).json(workspace.tasks);
    }
  } catch (error) {
    console.error("Error in opening one workspace", error);
    response.status(500).json({ message: "Internal Server Error" });

  }
})


export const addTask = catchAsync(async (request, response) => {
  try {
    const { workspaceId } = request.params;
    const task = request.body;

    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { _id: workspaceId },
      { $push: { tasks: task } },
      { new: true }
    );

    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    }
    const newTask = updatedWorkspace.tasks.slice(-1)[0];

    response.status(201).json({ _id: newTask._id });
  } catch (error) {
    console.error("Error while adding a new task.", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
})


export const updateTask = catchAsync(async (request, response) => {
  try {
    const { workspaceId, taskId } = request.params;
    const updatedTaskData = request.body;
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      {
        _id: workspaceId,
        "tasks._id": taskId,
      },
      {
        $set: {
          "tasks.$.isCompleted": updatedTaskData.isCompleted,
          "tasks.$.completedBy": updatedTaskData.completedBy,
        },
      },
      { new: true }
    );

    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace or Task not found" });
      return;
    }

    const updatedTask = updatedWorkspace.tasks.find(
      (task) => task._id.toString() === taskId
    );

    response.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error while updating the task.", error);
    response.status(500).json({ message: "Internal Server Error" });
  }

})

export const deleteTask = catchAsync(async (request, response) => {
  try {
    const { workspaceId, taskId } = request.params;

    const updatedWorkspace = await Workspace.findOneAndUpdate(
      {
        _id: workspaceId,
      },
      {
        $pull: {
          tasks: { _id: taskId },
        },
      },
      { new: true }
    );

    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace or Task not found" });
      return;
    }

    response.status(204).json({ message: "task deleted" });
  } catch (error) {
    console.error("Error while deleting the task.", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
})
