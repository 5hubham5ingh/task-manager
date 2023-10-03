import { Workspace } from "../Models/workspace.js";

// Send task list for a workspace
export async function sendTaskList(request, response) {
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
      response.status(200).json(workspace);
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
    const { userId, workspaceId } = request.params;
    const task = request.body;

    // Find the workspace by its ID and update it by pushing the new task into the 'tasks' array
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { _id: workspaceId },
      { $push: { tasks: task } },
      { new: true, fields: { tasks: 1 } } // To return only the 'tasks' field
    );

    // Check if the workspace was found and updated
    if (!updatedWorkspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    }

    // Extract the newly added task from the updated workspace
    const newTask = updatedWorkspace.tasks.slice(-1)[0]; // Get the last element (new task)

    // Respond with a success message and the new task
    response.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    // Handle errors
    console.error("Error while adding a new task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}



// Update a task in a workspace
export async function updateTask(request, response) {
  try {
    const { workspaceId, taskId } = request.params;
    const updatedTaskData = request.body; // Updated task data

    // Find the workspace by its ID and update the specific task within the 'tasks' array
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { 
        _id: workspaceId,
        'tasks._id': taskId // Match the task by its unique identifier (e.g., task ID)
      },
      { 
        $set: {
          'tasks.$.title': updatedTaskData.title, // Update specific task properties
          'tasks.$.description': updatedTaskData.description,
          // Add more properties as needed
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
    response.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    // Handle errors
    console.error("Error while updating the task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}


// Delete a task from a workspace
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
    response.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error while deleting the task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}


// Edit a task to mark it as complete and assign a name to 'completedBy'
export async function editTask(request, response) {
  try {
    const { workspaceId, taskId } = request.params;
    const { taskCompleted, completedBy } = request.body; // New task properties

    // Find the workspace by its ID and update the specific task within the 'tasks' array
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { 
        _id: workspaceId,
        'tasks._id': taskId, // Match the task by its unique identifier (e.g., task ID)
      },
      { 
        $set: {
          'tasks.$.isCompleted': taskCompleted, // Update 'isCompleted' property
          'tasks.$.completedBy': completedBy, // Update 'completedBy' property
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
    response.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    // Handle errors
    console.error("Error while editing the task.", error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}
