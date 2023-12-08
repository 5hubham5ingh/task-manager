import { Workspace } from "../Models/workspace.js";

// Send task list for a workspace
export async function sendTaskList(request, response) {console.log('send task List.')
  try {
    const { workspaceId } = request.params;

    // Find the workspace by its ID
    const workspace = await Workspace.findById(workspaceId).lean();

    // Check if the workspace exists
    if (!workspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    } else {
     
      // Send a successful response with the workspace data
      response.status(200).json(workspace.tasks);
    }
  } catch (error) {
    // Handle errors
    console.error("Error in opening one workspace", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}


// Add a task to a workspace
export async function addTask(request, response) {
  try {
    const { workspaceId } = request.params;
    const task = request.body;

    // Find the workspace by its ID and update it by pushing the new task into the 'tasks' array
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { _id: workspaceId },
      { $push: { tasks: task } },
      { new: true } 
    );

    // Check if the workspace was found and updated
    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    }
    // Extract the newly added task from the updated workspace
    const newTask = updatedWorkspace.tasks.slice(-1)[0]; // Get the last element (new task)

    // Respond with a success message and the new task
    response.status(201).json({ _id: newTask._id });
  } catch (error) {
    // Handle errors
    console.error("Error while adding a new task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}



// Update a task in a workspace to mark it as complete
export async function updateTask(request, response) {
  try {
    const { workspaceId, taskId } = request.params;
    const updatedTaskData = request.body; // Updated task data
    console.log(updatedTaskData)
    // Find the workspace by its ID and update the specific task within the 'tasks' array
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { 
        _id: workspaceId,
        'tasks._id': taskId // Match the task by its unique identifier (e.g., task ID)
      },
      { 
        $set: {
          'tasks.$.isCompleted': updatedTaskData.isCompleted, 
          'tasks.$.completedBy': updatedTaskData.completedBy,
         
        }
      },
      { new: true } // To return the updated document
    );

    // Check if the workspace and task were found and updated
    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace or Task not found" });
      return;
    }

    // Find the updated task within the updated workspace
    const updatedTask = updatedWorkspace.tasks.find(task => task._id.toString() === taskId);

    // Respond with a success message and the updated task
    response.status(200).json(updatedTask);
  } catch (error) {
    // Handle errors
    console.error("Error while updating the task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}


// Delete a task from a workspace , only creator can delete a task
export async function deleteTask(request, response) {
  try {
    const { workspaceId, taskId } = request.params;

    // Find the workspace by its ID and remove the specific task from the 'tasks' array
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { 
        _id: workspaceId,
      },
      { 
        $pull: {
          tasks: { _id: taskId }, // Remove the task by its unique identifier (e.g., task ID)
        }
      },
      { new: true } // To return the updated document
    );

    // Check if the workspace and task were found and the task was removed
    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace or Task not found" });
      return;
    }

    // Respond with a success message
    response.status(204);
  } catch (error) {
    // Handle errors
    console.error("Error while deleting the task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}



